import type { GetChildAttributes } from './SVGComponent'
import type { GetSVGTagName } from './tags'

export interface SVGElementInfo {
  /**
   * The tag information of the SVG element.
   */
  tag: GetSVGTagName
  /**
   * The properties of the SVG element.
   */
  props: Record<string, unknown>
  /**
   * The attributes of the child elements.
   */
  childAttrs: GetChildAttributes
}
