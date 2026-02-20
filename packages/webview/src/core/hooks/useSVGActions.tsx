import type { SVGComponent } from '@jt-view-exports-svg/core'
import { useTranslation } from 'react-i18next'

import { openFileInPosition } from '../utils/file'
import {
  createCanvasFromImage,
  getSVGBlobUrl,
  serializeSVG,
  triggerDownload,
} from '../utils/svg-actions'

export interface UseSVGActionsProps {
  svgRef: React.RefObject<SVGElement | null>
}

export type UseSVGActionsReturn = Array<
  | {
      id: string
      label: string
      onClick: (component: SVGComponent) => void
    }
  | { id: string; isDivider: true }
>

export const useSVGActions = ({ svgRef }: UseSVGActionsProps): UseSVGActionsReturn => {
  const { t } = useTranslation(undefined, { keyPrefix: 'DevTools.playground' })

  /**
   * Downloads the current SVG as a `.svg` file.
   */
  const downloadAsSVG = (component: SVGComponent) => {
    const svgString = serializeSVG(svgRef.current)
    if (!svgString) return

    const url = getSVGBlobUrl(svgString)
    triggerDownload(url, `${component.name}.svg`)
  }

  /**
   * Downloads the current SVG rendered as a PNG image file.
   */
  const downloadAsPNG = (component: SVGComponent) => {
    const svgString = serializeSVG(svgRef.current)
    if (!svgString) return

    const url = getSVGBlobUrl(svgString)
    const img = new Image()
    img.crossOrigin = 'anonymous'

    img.onload = () => {
      const canvas = createCanvasFromImage(img)
      URL.revokeObjectURL(url)

      const pngUrl = canvas.toDataURL('image/png')
      triggerDownload(pngUrl, `${component.name}.png`)
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

  /**
   * Opens the SVG component in the editor at its start position.
   */
  const openInEditor = (component: SVGComponent) => {
    openFileInPosition(component.location.file, component.location.start)
  }

  return [
    { id: 'open-in-editor', label: t('OpenInEditor'), onClick: openInEditor },
    { id: 'divider-open-copy', isDivider: true },
    { id: 'copy-as-svg', label: t('CopyAsSVG'), onClick: copyAsSVG },
    { id: 'copy-as-png', label: t('CopyAsPNG'), onClick: copyAsPNG },
    { id: 'divider-copy-download', isDivider: true },
    { id: 'download-as-svg', label: t('DownloadAsSVG'), onClick: downloadAsSVG },
    { id: 'download-as-png', label: t('DownloadAsPNG'), onClick: downloadAsPNG },
  ]
}
