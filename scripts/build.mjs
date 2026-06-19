import { copyFile, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const files = ["index.html", "app.js", "styles.css", "robots.txt"];

await rm(dist, { force: true, recursive: true });
await mkdir(dist, { recursive: true });

for (const file of files) {
  await copyFile(join(root, file), join(dist, file));
}

console.log(`Built ${files.length} static files into dist/`);
