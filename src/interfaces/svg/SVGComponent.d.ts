import { SVGComponent, SVGComponentProps, SVGErrors } from '../ViewExportsSVG'

export interface GetSVGComponent extends Pick<SVGComponent, 'component' | 'isAnimated' | 'params'> {
  hasErrors: boolean
  errors?: SVGErrors
}

export interface GetChildAttributes {
  children: SVGComponentProps[]
  isMotion: boolean
  hasErrors: boolean
  errors?: SVGErrors
}
