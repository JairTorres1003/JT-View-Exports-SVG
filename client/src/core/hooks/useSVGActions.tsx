import { useTranslation } from 'react-i18next'

import {
  createCanvasFromImage,
  getSVGBlobUrl,
  serializeSVG,
  triggerDownload,
} from '../utils/svg-actions'

interface UseSVGActionsProps {
  svgRef: React.RefObject<SVGElement | null>
}

export const useSVGActions = ({ svgRef }: UseSVGActionsProps) => {
  const { t } = useTranslation(undefined, { keyPrefix: 'DevTools.playground' })

  /**
   * Downloads the current SVG as a `.svg` file.
   */
  const downloadAsSVG = (name = 'image') => {
    const svgString = serializeSVG(svgRef.current)
    if (!svgString) return

    const url = getSVGBlobUrl(svgString)
    triggerDownload(url, `${name}.svg`)
  }

  /**
   * Downloads the current SVG rendered as a PNG image file.
   */
  const downloadAsPNG = (name = 'image') => {
    const svgString = serializeSVG(svgRef.current)
    if (!svgString) return

    const url = getSVGBlobUrl(svgString)
    const img = new Image()
    img.crossOrigin = 'anonymous'

    img.onload = () => {
      const canvas = createCanvasFromImage(img)
      URL.revokeObjectURL(url)

      const pngUrl = canvas.toDataURL('image/png')
      triggerDownload(pngUrl, `${name}.png`)
    }

    img.onerror = (err) => {
      console.error('Image load error:', err)
    }

    img.src = url
  }

  /**
   * Copies the SVG markup as text to the clipboard.
   */
  const copyAsSVG = () => {
    const svgString = serializeSVG(svgRef.current)
    if (!svgString) return

    navigator.clipboard.writeText(svgString).catch((err) => {
      console.error('Failed to copy SVG:', err)
    })
  }

  /**
   * Copies the rendered PNG version of the SVG to the clipboard.
   */
  const copyAsPNG = () => {
    const svgString = serializeSVG(svgRef.current)
    if (!svgString) return

    const url = getSVGBlobUrl(svgString)
    const img = new Image()
    img.crossOrigin = 'anonymous'

    img.onload = () => {
      const canvas = createCanvasFromImage(img)
      URL.revokeObjectURL(url)

      canvas.toBlob(async (blob) => {
        if (!blob) return
        try {
          await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
        } catch (err) {
          console.error('Failed to copy PNG:', err)
        }
      }, 'image/png')
    }

    img.onerror = (err) => {
      console.error('Image load error:', err)
    }

    img.src = url
  }

  return [
    { label: t('CopyAsSVG'), onClick: copyAsSVG },
    { label: t('CopyAsPNG'), onClick: copyAsPNG },
    { isDivider: true },
    { label: t('DownloadAsSVG'), onClick: downloadAsSVG },
    { label: t('DownloadAsPNG'), onClick: downloadAsPNG },
  ]
}
