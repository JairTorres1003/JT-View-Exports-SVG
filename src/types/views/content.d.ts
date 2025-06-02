import { Position, SVGFile } from '../ViewExportsSVG'

export interface GetWebviewAssets {
  favicon: string
  index: string
  styles: string
}
export interface OpenFile {
  file: SVGFile
  position?: Position
}

export interface AssetPath {
  workspace: SVGFile[]
  user: SVGFile[]
}
