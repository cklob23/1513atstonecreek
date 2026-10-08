import { mkdir, readdir, stat } from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const publicDir = path.join(process.cwd(), "public")
const outDir = path.join(publicDir, "opt")
const widths = [800, 1600]
const concurrency = 4
const minBytes = 80 * 1024

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG", ".webp"])

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === "opt" || entry.name.startsWith(".")) continue
      files.push(...(await walk(full)))
    } else if (IMAGE_EXT.has(path.extname(entry.name))) {
      files.push(full)
    }
  }
  return files
}

async function shouldSkip(filePath) {
  try {
    const info = await stat(filePath)
    return info.size < minBytes
  } catch {
    return true
  }
}

async function alreadyFresh(inputPath, outputPath) {
  try {
    const [input, output] = await Promise.all([stat(inputPath), stat(outputPath)])
    return output.mtimeMs >= input.mtimeMs && output.size > 0
  } catch {
    return false
  }
}

async function optimizeOne(filePath) {
  if (await shouldSkip(filePath)) return 0
  const stem = path.basename(filePath).replace(/\.[^.]+$/, "")
  let wrote = 0

  for (const width of widths) {
    const dest = path.join(outDir, `${stem}-${width}.webp`)
    if (await alreadyFresh(filePath, dest)) continue
    await sharp(filePath)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 76 })
      .toFile(dest)
    wrote += 1
  }
  return wrote
}

async function runPool(items, limit, worker) {
  let index = 0
  let written = 0
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (index < items.length) {
      const current = items[index]
      index += 1
      written += await worker(current)
    }
  })
  await Promise.all(runners)
  return written
}

await mkdir(outDir, { recursive: true })
const files = await walk(publicDir)
const written = await runPool(files, concurrency, optimizeOne)
console.log(`Optimized ${files.length} source images (${written} new WebP variants) into public/opt`)
