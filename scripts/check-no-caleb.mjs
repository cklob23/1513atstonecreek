import { readdir, readFile } from "node:fs/promises"
import path from "node:path"

const outDir = path.join(process.cwd(), "out")
const needle = "[CALEB"
const hits = []

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(full)
      continue
    }
    if (!/\.(html|js|css|json|txt)$/i.test(entry.name)) continue
    const text = await readFile(full, "utf8")
    if (text.includes(needle)) {
      hits.push(path.relative(process.cwd(), full))
    }
  }
}

try {
  await walk(outDir)
} catch (error) {
  console.error(`Could not scan ${outDir}: ${error.message}`)
  process.exit(1)
}

if (hits.length > 0) {
  console.error(`Owner draft marker ${needle} found in exported files:`)
  for (const file of hits) console.error(`  ${file}`)
  process.exit(1)
}

console.log(`No ${needle} markers in ${outDir}`)
