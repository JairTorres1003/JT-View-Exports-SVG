/**
 * Props for the Finder component.
 */
export interface FinderProps {
  /**
   * Handles the received SVG components data from the webview context.
   * @param data The data received from the webview context.
   */
  handleSvgComponents: (data: any) => void
  /**
   * An optional reference to a DOM element.
   * This reference can be used to position the panel relative to the referenced element.
   */
  refPortalButton?: RefObject<HTMLElement> | null
  /**
   * A boolean indicating whether the panel is open.
   * @default false
   */
  isOpenPanel?: boolean
}
