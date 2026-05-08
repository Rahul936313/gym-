import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const assetsDir = path.join(root, 'src', 'assets')
const outDir = path.join(assetsDir, 'optimized')

const files = [
  'WhatsApp Image 2026-05-08 at 12.25.23 PM.jpeg',
  'WhatsApp Image 2026-05-08 at 12.25.23 PM (1).jpeg',
  'WhatsApp Image 2026-05-08 at 12.25.23 PM (2).jpeg',
  'WhatsApp Image 2026-05-08 at 12.25.24 PM.jpeg',
  'WhatsApp Image 2026-05-08 at 12.25.24 PM (1).jpeg',
  'WhatsApp Image 2026-05-08 at 12.25.24 PM (2).jpeg',
]

async function run() {
  await fs.mkdir(outDir, { recursive: true })

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const input = path.join(assetsDir, file)
    const output = path.join(outDir, `gym-${i + 1}.webp`)

    await sharp(input)
      .rotate()
      .resize({ width: 1280, withoutEnlargement: true })
      .webp({ quality: 74, effort: 5 })
      .toFile(output)

    console.log(`optimized: ${file} -> ${path.relative(root, output)}`)
  }

  console.log('done')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})

