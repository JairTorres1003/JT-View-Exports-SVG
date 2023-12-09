/**
 * The props of the Delay component.
 * @example
 * ```tsx
 * import { Delay } from 'webview-ui'
 *
 * const Example = () => (
 *  <Delay delay={1000}>
 *   <div>unmounts after 1 second</div>
 * </Delay>
 * )
 * ```
 */
export interface DelayProps {
  /**
   * The children to render.
   */
  children: React.ReactNode
  /**
   * The time to wait before rendering the children.
   * @default 300
   */
  delay?: number
  /**
   * Indicates whether the component is rendered with delay when mounted or not.
   * @default false
   */
  mount?: boolean
  /**
   * Indicates whether the component is rendered or not.
   * @default true
   */
  show?: boolean
}
