/**
 * Serializes the current SVG element referenced by `svgRef` into a string.
 */
export const serializeSVG = (element: SVGElement | null): string | undefined => {
  if (!element) return

  return new XMLSerializer().serializeToString(element)
}

/**
 * Creates a blob URL from the serialized SVG string.
 */
export const getSVGBlobUrl = (svgString: string): string => {
  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
  return URL.createObjectURL(blob)
}

/**
 * Downloads a file using a blob URL.
 */
export const triggerDownload = (url: string, filename: string) => {
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}

/**
 * Creates a canvas element and draws the provided image onto it.
 * Returns the canvas element.
 */
export const createCanvasFromImage = (img: HTMLImageElement) => {
  const canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height

  const ctx = canvas.getContext('2d')
  ctx?.drawImage(img, 0, 0)

  return canvas
}
