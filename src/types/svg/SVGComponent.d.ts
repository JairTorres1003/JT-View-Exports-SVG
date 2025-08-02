import type { SVGComponent, SVGComponentProps, SVGErrors } from '../ViewExportsSVG'

export interface GetSVGComponent extends Pick<SVGComponent, 'component' | 'isAnimated' | 'params'> {
  hasErrors: boolean
  errors?: SVGErrors
}

export interface GetChildAttributes {
  children: SVGComponentProps['children']
  isMotion: boolean
  hasErrors: boolean
  errors?: SVGErrors
}

export type IValue = t.JSXElement | t.JSXFragment | string | number | boolean
