import { SVGDeclaration } from '@/enum/ViewExportsSVG'

import { SVGTagName } from './svg/tags'
import { DeclarationExport } from './svg/extracts'
import { ParamsTypes } from './misc'

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
  components: SVGComponent[]
  /**
   * The group kind of the SVG components.
   */
  groupKind: {
    id: string
    label: string
  }
  /**
   * Indicates whether the SVG components that are not exported should be shown.
   */
  isShowNoExports: boolean
  /**
   * This is an array of SVG files that are associated with the group of exports (groupKind).
   */
  files: SVGFile[]
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
   * The extension of the SVG file.
   */
  extension: string
  /**
   * The dirname of the SVG file.
   */
  dirname: string
  /**
   * The language of the SVG file.
   * @default 'javascript'
   */
  language?: string
  /**
   * Indicates whether the file is located in a temporary directory.
   */
  isTemporary: boolean
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
   * The declaration of the SVG component.
   */
  declaration: SVGDeclaration
  /**
   * Indicates whether the SVG component is exported.
   */
  isExported: boolean
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
   * The types of the parameters of the SVG component.
   * - Which are passed as props to the component.
   */
  types: ParamsTypes
  /**
   * Indicates whether the SVG component has rest props.
   */
  withRestProps: boolean
  /**
   * Indicates whether the SVG component has errors.
   */
  hasErrors: boolean
  /**
   * The errors found in the SVG component.
   */
  errors?: SVGErrors
  /**
   * Indicates whether the SVG component is a favorite.
   */
  isFavorite?: boolean
}

export interface SVGComponentProps {
  tag: string | SVGTagName
  isMotion: boolean
  children: Array<SVGComponentProps | string>
  props: {
    className?: string
    [key: string]: any
  }
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
  svg: {
    exportComponents: SVGComponent[]
    noExportComponents: SVGComponent[]
  }
}

export interface SVGIcon {
  /**
   * The name of the SVG component.
   */
  name: string
  /**
   * The location of the SVG component in the file.
   */
  location: SVGLocation
}

export interface SVGPlayground extends SVGIcon {
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
