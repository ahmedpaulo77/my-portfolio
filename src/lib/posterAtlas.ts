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

  const sources = projects.map((project) => {
    // SAVOR ships JPEGs while the rest ship WebP — derive the real extension
    // from the project cover instead of assuming ".webp".
    const ext = project.cover.match(/\.[a-z0-9]+$/i)?.[0] || '.webp'
    return `${base}/images/sites/${project.slug}-wall${ext}`
  })
  const count = sources.length

  const posters = await Promise.all(
    sources.map(async (src) => {
      const image = new Image()
      image.decoding = 'async'
      image.src = src
      try {
        await image.decode()
        return image
      } catch {
        // Fall back to a blank tile instead of breaking the whole poster field.
        console.warn(`Unable to decode poster image: ${src}`)
        const tile = document.createElement('canvas')
        tile.width = 16
        tile.height = 24
        const c = tile.getContext('2d')
        if (c) {
          c.fillStyle = '#0b0c0e'
          c.fillRect(0, 0, tile.width, tile.height)
        }
        return tile as unknown as HTMLImageElement
      }
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
    const naturalWidth = image.naturalWidth || (image as unknown as HTMLCanvasElement).width
    const naturalHeight = image.naturalHeight || (image as unknown as HTMLCanvasElement).height
    const scale = Math.max(width / naturalWidth, height / naturalHeight)
    const sourceWidth = width / scale
    const sourceHeight = height / scale
    ctx.drawImage(
      image,
      (naturalWidth - sourceWidth) / 2,
      (naturalHeight - sourceHeight) / 2,
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
