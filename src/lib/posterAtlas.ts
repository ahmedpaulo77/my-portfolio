import { projects } from '../content/site'

const base = import.meta.env.BASE_URL.replace(/\/$/, '')

export async function createPosterAtlas(): Promise<{
  canvas: HTMLCanvasElement
  count: number
  columns: number
  rows: number
}> {
  const columns = 4
  const rows = 4
  const tileWidth = 512
  const tileHeight = 768
  const gutter = 2

  const sources = projects.map((project) => `${base}/images/sites/${project.slug}-wall.webp`)
  const count = sources.length

  const posters = await Promise.all(
    sources.map(async (src) => {
      const image = new Image()
      image.decoding = 'async'
      image.src = src
      try {
        await image.decode()
      } catch {
        throw new Error(`Unable to decode poster image: ${src}`)
      }
      return image
    }),
  )

  const canvas = document.createElement('canvas')
  canvas.width = tileWidth * columns
  canvas.height = 4096
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Canvas2D is required to create the poster atlas')
  // Power-of-two texture dimensions allow smooth mipmapped minification in WebGL1.
  ctx.scale(1, canvas.height / (tileHeight * rows))
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = 'high'
  ctx.fillStyle = '#0b0c0e'
  ctx.fillRect(0, 0, tileWidth * columns, tileHeight * rows)

  const width = tileWidth - gutter * 2
  const height = tileHeight - gutter * 2

  posters.forEach((image, index) => {
    const x = (index % columns) * tileWidth + gutter
    const y = Math.floor(index / columns) * tileHeight + gutter
    const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight)
    const sourceWidth = width / scale
    const sourceHeight = height / scale
    ctx.drawImage(
      image,
      (image.naturalWidth - sourceWidth) / 2,
      (image.naturalHeight - sourceHeight) / 2,
      sourceWidth,
      sourceHeight,
      x,
      y,
      width,
      height,
    )
  })

  return { canvas, count, columns, rows }
}
