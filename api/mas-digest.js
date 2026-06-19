// Read endpoint: returns the latest stored MAS digest as JSON.
// Called by the dashboard frontend. Safe to hit frequently (reads cache).

import { readDigest } from "../lib/masPipeline.js";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  try {
    const payload = await readDigest();
    res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
    res.status(200).json(payload);
  } catch (err) {
    res.status(500).json({ error: String(err?.message || err) });
  }
}
