import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = path.resolve('public/images')
const QUALITY = 82

/** @param {string} relativePath */
function getMaxWidth(relativePath) {
  const file = relativePath.toLowerCase()

  if (file.includes('logo') || file.includes('avatar')) return 400
  if (file.includes('hero') || file.includes('cta-bg') || file.includes('contact-hero')) {
    return 1920
  }
  if (file.includes('feature-house') || file.includes('why-choose')) return 1600
  if (
    file.includes('gallery') ||
    file.includes('service-') ||
    file.includes('how-it-works') ||
    file.includes('project-')
  ) {
    return 900
  }

  return 1200
}

/** @param {string} dir */
async function walk(dir) {
  /** @type {string[]} */
  const files = []
  const entries = await fs.readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)))
      continue
    }

    if (/\.(png|jpe?g)$/i.test(entry.name)) {
      files.push(fullPath)
    }
  }

  return files
}

/** @param {string} filePath */
async function optimizeImage(filePath) {
  const relativePath = path.relative(ROOT, filePath)
  const outputPath = filePath.replace(/\.(png|jpe?g)$/i, '.webp')
  const maxWidth = getMaxWidth(relativePath)

  const input = sharp(filePath)
  const metadata = await input.metadata()
  const shouldResize = metadata.width && metadata.width > maxWidth

  let pipeline = input.rotate()

  if (shouldResize) {
    pipeline = pipeline.resize({
      width: maxWidth,
      withoutEnlargement: true,
      fit: 'inside',
    })
  }

  await pipeline.webp({ quality: QUALITY, effort: 4 }).toFile(outputPath)

  const [before, after] = await Promise.all([
    fs.stat(filePath),
    fs.stat(outputPath),
  ])

  return {
    relativePath,
    before: before.size,
    after: after.size,
  }
}

const files = await walk(ROOT)
const results = []

for (const file of files) {
  results.push(await optimizeImage(file))
}

const beforeTotal = results.reduce((sum, item) => sum + item.before, 0)
const afterTotal = results.reduce((sum, item) => sum + item.after, 0)

console.log(`Optimized ${results.length} images`)
console.log(`Before: ${(beforeTotal / 1024 / 1024).toFixed(1)} MB`)
console.log(`WebP:   ${(afterTotal / 1024 / 1024).toFixed(1)} MB`)
console.log(`Saved:  ${(((beforeTotal - afterTotal) / beforeTotal) * 100).toFixed(0)}%`)

for (const item of results.sort((a, b) => b.before - a.before).slice(0, 10)) {
  console.log(
    `  ${(item.before / 1024 / 1024).toFixed(1)} MB -> ${(item.after / 1024 / 1024).toFixed(1)} MB  ${item.relativePath}`,
  )
}
