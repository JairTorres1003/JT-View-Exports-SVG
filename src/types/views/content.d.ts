import type { Position, SVGFile } from '../ViewExportsSVG'

export interface ManifestContent {
  favicon: string
  main: string
  style: string
}

export interface OpenFile {
  file: SVGFile
  position?: Position
}

export interface AssetPath {
  workspace: SVGFile[]
  user: SVGFile[]
}

export interface FileTemporary {
  name: string
  content: ArrayBuffer | string
}
