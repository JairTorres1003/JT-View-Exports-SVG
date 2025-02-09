import { Position, SVGFile } from '../ViewExportsSVG'

export interface GetWebviewAssets {
  icon: string
  index: string
  styles: string
  moduleEditorWorker: string
  webWorkerExtensionHostIframe: string
}
export interface OpenFile {
  file: SVGFile
  position?: Position
}

export interface AssetPath {
  workspace: SVGFile[]
  user: SVGFile[]
}
