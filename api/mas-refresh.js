// Refresh endpoint: scrapes MAS, summarises, and stores the digest.
// Triggered daily by the Vercel cron defined in vercel.json.
// Protected by CRON_SECRET when that env var is set.

import { refreshDigest } from "../lib/masPipeline.js";

export default async function handler(req, res) {
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = req.headers.authorization || "";
    if (auth !== `Bearer ${secret}`) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }
  }

  try {
    const payload = await refreshDigest();
    res.status(200).json({ ok: true, count: payload.items.length, stamp: payload.stamp });
  } catch (err) {
    res.status(500).json({ ok: false, error: String(err?.message || err) });
  }
}
