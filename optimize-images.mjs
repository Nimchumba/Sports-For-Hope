import sharp from 'sharp'
import { readdirSync, mkdirSync } from 'node:fs'
import { join, parse } from 'node:path'

const input = 'raw-photos'
const output = 'src/assets/gallery'
mkdirSync(output, { recursive: true })

for (const file of readdirSync(input)) {
  const { name, ext } = parse(file)
  if (!/\.(jpe?g|png|webp)$/i.test(ext)) continue

  await sharp(join(input, file))
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(join(output, `${name}.webp`))

  console.log('done', file)
}