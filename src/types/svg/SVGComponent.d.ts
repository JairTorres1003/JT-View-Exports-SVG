import type { SVGComponent, SVGComponentProps, SVGErrors } from '../ViewExportsSVG'

import type { GetSVGTagName } from './tags'

export interface GetSVGComponent extends Pick<SVGComponent, 'component' | 'isAnimated' | 'params'> {
  hasErrors: boolean
  errors?: SVGErrors
  tag?: GetSVGTagName
}

export interface GetChildAttributes {
  children: SVGComponentProps['children']
  isMotion: boolean
  isAnimated: boolean
  hasErrors: boolean
  errors?: SVGErrors
}

export type IValue = t.JSXElement | t.JSXFragment | string | number | boolean

type ValidationResult =
  | {
      isValid: true
      tag: GetSVGTagName
      props: Record<string, unknown>
      params: Record<string, unknown>
    }
  | { isValid: false; tag: GetSVGTagName; error: SVGErrors }
