import { SVGTypeExport } from '@/enum/ViewExportsSVG'

import { SVGTagName } from './svg/tags'
import { DeclarationExport } from './svg/extracts'

export interface ViewExportSVG {
  /**
   * The number of exports (SVG components) present in the file.
   */
  totalExports: number
  /**
   * The number of SVG components that are not exported.
   */
  totalNoExports: number
  /**
   * The number of SVG elements found in the file.
   */
  totalSVG: number
  /**
   * The SVG components found in the file.
   */
  exportComponents: SVGComponent[]
  /**
   * The SVG components that are not exported.
   */
  noExportComponents: SVGComponent[]
}

export interface SVGFile {
  /**
   * The absolute path of the SVG file.
   */
  absolutePath: string
  /**
   * The relative path of the SVG file.
   */
  relativePath: string
  /**
   * The basename of the SVG file.
   */
  basename: string
  /**
   * The dirname of the SVG file.
   */
  dirname: string
  /**
   * The language of the SVG file.
   * @default 'plaintext'
   */
  language?: string
}

export interface SVGComponent {
  /**
   * The SVG component.
   */
  component: SVGComponentProps
  /**
   * The name of the SVG component.
   */
  name: string
  /**
   * The location of the SVG component in the file.
   */
  location: SVGLocation
  /**
   * The type of export of the SVG component.
   */
  typeExport: SVGTypeExport
  /**
   * Indicates whether the component is an SVG animation component.
   * It's optional and can be true or false.
   */
  isAnimated: boolean
  /**
   * The parameters of the SVG component.
   * - Which are passed as props to the component.
   */
  params: Record<string, any>
  /**
   * Indicates whether the SVG component has errors.
   */
  hasErrors: boolean
  /**
   * The errors found in the SVG component.
   */
  errors?: SVGErrors
}

export interface SVGComponentProps {
  tag: string | SVGTagName
  isMotion: boolean
  children: SVGComponentProps[]
  props: Record<string, any>
}

export interface SVGLocation {
  start?: Position
  end?: Position
  /**
   * The file object containing the absolute and relative paths of the SVG file.
   */
  file: SVGFile
}

export interface Position {
  line: number
  column: number
  index: number
}

export interface SVGErrors {
  location: Partial<SVGLocation>
  message: string
}

export interface ExtractSVGExports {
  base: Record<string, { declaration: DeclarationExport; params: Record<string, any> }>
  svg: Pick<ViewExportSVG, 'exportComponents' | 'noExportComponents'>
}

export interface SVGDefaultProps {
  className: string
  color: string
  fill: string
  height: number
  size: number
  state: boolean
  stroke: string
  strokeColor: string
  strokeWidth: number
  style?: CSSStyleDeclaration | {}
  sx?: CSSStyleDeclaration | {}
  width: number
}

export interface SVGPlayground {
  /**
   * The name of the SVG component.
   */
  name: string
  /**
   * The location of the SVG component in the file.
   */
  location: SVGLocation
  /**
   * The type of export of the SVG component.
   */
  typeExport: SVGTypeExport
  /**
   * The SVG component in use and edited.
   * @example
   * ```tsx
   * <ComponentName
   *   color="red"
   *   fill="blue"
   *   size={24}
   *   className="custom-class"
   *   style={{ border: '1px solid black' }}
   * />
   * ```
   */
  value: string
}
