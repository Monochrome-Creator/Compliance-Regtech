// Shared MAS digest pipeline: scrape -> summarise -> store/read.
// Used by the Vercel functions in /api. Kept outside /api so it is not
// treated as its own route.

import { put, list } from "@vercel/blob";

const BLOB_PATH = "mas-digest.json";

// MAS listing pages to extract from. Firecrawl renders the JS-heavy pages.
const MAS_SOURCES = [
  { url: "https://www.mas.gov.sg/regulation/notices", type: "Notice" },
  { url: "https://www.mas.gov.sg/regulation/guidelines", type: "Guideline" },
];

// Offline / fallback digest, used when the live pipeline is unavailable
// (e.g. the static GitHub Pages copy, or before the first cron run).
export const CURATED_FALLBACK = [
  ["SFA04-N02", "Notice", "high", "18 Jun 2026", "AML/CFT for capital markets intermediaries", "Reinforces risk-based CDD, ongoing screening, and prompt STR filing for CMS holders and the family offices they serve.", "https://www.mas.gov.sg/regulation/anti-money-laundering"],
  ["FSM-N22", "Notice", "medium", "16 Jun 2026", "Cyber Hygiene baseline", "Mandatory controls for administrative accounts, patching, malware protection, perimeter defence, and multi-factor authentication.", "https://www.mas.gov.sg/regulation/notices/notice-fsm-n22"],
  ["TRM-2021", "Guideline", "medium", "12 Jun 2026", "Technology Risk Management", "Board-level technology governance, operational resilience, and third-party technology-risk expectations.", "https://www.mas.gov.sg/regulation/guidelines/guidelines-on-technology-risk-management"],
  ["ENRM-AM", "Guideline", "low", "09 Jun 2026", "Environmental Risk Management for Asset Managers", "Governance, risk-assessment, and disclosure expectations for environmental risk in managed portfolios.", "https://www.mas.gov.sg/regulation/guidelines/guidelines-on-environmental-risk-management-for-asset-managers"],
  ["AML-HUB", "Update", "medium", "07 Jun 2026", "MAS AML/CFT industry updates", "Latest MAS guidance papers, typologies, and enforcement actions relevant to family-office compliance.", "https://www.mas.gov.sg/regulation/anti-money-laundering"],
];

function sgtStamp(date = new Date()) {
  // Render an "DD Mon YYYY, HH:mm SGT" stamp in Asia/Singapore time.
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Singapore",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const get = (t) => parts.find((p) => p.type === t)?.value || "";
  return `${get("day")} ${get("month")} ${get("year")}, ${get("hour")}:${get("minute")} SGT`;
}

async function scrapeMarkdown(url, apiKey) {
  const res = await fetch("https://api.firecrawl.dev/v1/scrape", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ url, formats: ["markdown"], onlyMainContent: true }),
  });
  if (!res.ok) {
    throw new Error(`Firecrawl ${res.status} for ${url}: ${await res.text()}`);
  }
  const json = await res.json();
  return json?.data?.markdown || "";
}

async function summarise(sources, apiKey) {
  const model = process.env.MAS_SUMMARY_MODEL || "openai/gpt-4o-mini";
  const corpus = sources
    .map((s) => `### Source (${s.type}) ${s.url}\n${s.markdown.slice(0, 12000)}`)
    .join("\n\n");

  const prompt = [
    "You are a Singapore compliance analyst for a family office.",
    "From the MAS regulation listing pages below, extract the most recent publications (up to 8 total).",
    "Return ONLY a JSON array. Each element must be an object with these exact keys:",
    '{"ref": string, "type": "Notice"|"Guideline"|"Update", "priority": "high"|"medium"|"low", "date": "DD Mon YYYY", "title": string, "summary": string, "url": string}.',
    "Rules:",
    "- summary: one sentence, <= 220 characters, plain English, focused on what a family-office compliance officer must do.",
    "- priority: high if AML/CFT, sanctions, licensing or conduct; medium for tech/cyber/risk; low otherwise.",
    "- url: an absolute https://www.mas.gov.sg/... link to the specific publication.",
    "- ref: the notice/guideline reference code if present, else a short slug.",
    "- Do not invent items that are not on the pages.",
    "",
    corpus,
  ].join("\n");

  const res = await fetch("https://ai-gateway.vercel.sh/v1/chat/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  if (!res.ok) {
    throw new Error(`AI Gateway ${res.status}: ${await res.text()}`);
  }
  const json = await res.json();
  const content = json?.choices?.[0]?.message?.content || "";
  return parseItems(content);
}

function parseItems(content) {
  const cleaned = content.replace(/```json/gi, "").replace(/```/g, "").trim();
  const start = cleaned.indexOf("[");
  const end = cleaned.lastIndexOf("]");
  if (start === -1 || end === -1) return [];
  const arr = JSON.parse(cleaned.slice(start, end + 1));
  return arr
    .filter((o) => o && o.title && o.url)
    .slice(0, 8)
    .map((o) => [
      String(o.ref || "MAS"),
      ["Notice", "Guideline", "Update"].includes(o.type) ? o.type : "Update",
      ["high", "medium", "low"].includes(o.priority) ? o.priority : "medium",
      String(o.date || ""),
      String(o.title),
      String(o.summary || "").slice(0, 240),
      String(o.url),
    ]);
}

// Run the full pipeline and persist the result to Blob. Returns the payload.
export async function refreshDigest() {
  const firecrawlKey = process.env.FIRECRAWL_API_KEY;
  const aiKey = process.env.AI_GATEWAY_API_KEY;
  if (!firecrawlKey || !aiKey) {
    throw new Error("Missing FIRECRAWL_API_KEY or AI_GATEWAY_API_KEY");
  }

  const sources = [];
  for (const src of MAS_SOURCES) {
    sources.push({ ...src, markdown: await scrapeMarkdown(src.url, firecrawlKey) });
  }

  const items = await summarise(sources, aiKey);
  const payload = {
    updatedAt: new Date().toISOString(),
    stamp: sgtStamp(),
    items: items.length ? items : CURATED_FALLBACK,
  };

  await put(BLOB_PATH, JSON.stringify(payload), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });

  return payload;
}

// Read the most recent stored digest. Falls back to the curated list.
export async function readDigest() {
  try {
    const { blobs } = await list({ prefix: BLOB_PATH, limit: 1 });
    if (blobs[0]?.url) {
      const res = await fetch(blobs[0].url, { cache: "no-store" });
      if (res.ok) return await res.json();
    }
  } catch {
    // fall through to curated fallback
  }
  return { updatedAt: null, stamp: sgtStamp(), items: CURATED_FALLBACK };
}
