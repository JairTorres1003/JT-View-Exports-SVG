import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import * as runtime from 'react/jsx-runtime'
import MDXComponents from '@theme/MDXComponents'
import type { RootContent } from 'mdast'
import type { Nodes } from 'hast'

/**
 * Renders HAST nodes to React components using MDX components.
 *
 * @param hastNode - The HAST node to render
 * @returns A React element representing the rendered HAST node
 */
export function renderHast(hastNode: RootContent[]): React.ReactElement {
  return toJsxRuntime(hastNode as unknown as Nodes, {
    ...runtime,
    Fragment: runtime.Fragment,
    components: MDXComponents,
  })
}
