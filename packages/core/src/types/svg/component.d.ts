import type { SVGDeclaration } from '../../constants/declarations'

import type { SVGErrors, SVGLocation } from '../common'
import type { ParamsTypes } from '../misc'
import type { GetSVGTagName, SVGTagName } from './tags'

/**
 * Represents an SVG component with all its metadata
 */
export interface SVGComponent {
  /** The SVG component structure */
  component: SVGComponentProps
  /** The name of the SVG component */
  name: string
  /** The location of the SVG component in the file */
  location: SVGLocation
  /** The declaration type of the SVG component */
  declaration: SVGDeclaration
  /** Indicates whether the SVG component is exported */
  isExported: boolean
  /**
   * Indicates whether the component is an SVG animation component
   * It's optional and can be true or false
   */
  isAnimated: boolean
  /**
   * The parameters of the SVG component
   * Which are passed as props to the component
   */
  params: Record<string, unknown>
  /**
   * The types of the parameters of the SVG component
   * Which are passed as props to the component
   */
  types: ParamsTypes
  /** Indicates whether the SVG component has rest props */
  withRestProps: boolean
  /** Indicates whether the SVG component has errors */
  hasErrors: boolean
  /** The errors found in the SVG component */
  errors?: SVGErrors
  /** Indicates whether the SVG component is a favorite */
  isFavorite?: boolean
}

/**
 * Represents the properties of an SVG component
 */
export interface SVGComponentProps {
  /** The SVG tag name */
  tag: SVGTagName
  /** Indicates if it's a motion component */
  isMotion: boolean
  /** Indicates if it has animations */
  isAnimated: boolean
  /** Child elements (can be other components or strings) */
  children: Array<SVGComponentProps | string>
  /** Component props */
  props: {
    /** Optional className */
    className?: string
    /** Any other props */
    [key: string]: unknown
  }
}

/**
 * Partial SVG component for intermediate processing
 */
export interface GetSVGComponent extends Pick<SVGComponent, 'component' | 'isAnimated' | 'params'> {
  /** Indicates if there are errors */
  hasErrors: boolean
  /** Error details if any */
  errors?: SVGErrors
  /** Tag information */
  tag?: GetSVGTagName
}

/**
 * Represents child attributes during parsing
 */
export interface GetChildAttributes {
  /** Child elements */
  children: SVGComponentProps['children']
  /** Motion flag */
  isMotion: boolean
  /** Animation flag */
  isAnimated: boolean
  /** Error flag */
  hasErrors: boolean
  /** Error details */
  errors?: SVGErrors
}
