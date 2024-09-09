import { type SVGComponent, type SVGComponentProps } from '@api/interfaces/ViewExportsSVG'
import cn from 'classnames'
import { createElement, forwardRef } from 'react'

import { ErrorBoundary } from '../helpers'

import { SVGError } from '@/assets/icons/indicators'
import { isEmpty } from '@/utils/misc'

interface RenderSvgProps {
  component: SVGComponentProps
  className?: string
}

/**
 * Renders an SVG component dynamically based on the provided props.
 *
 * @throws Throws an error if the component is empty.
 * @returns The rendered SVG component.
 */
const DynamicTagComponent = forwardRef<RenderSvgProps, RenderSvgProps>(function RenderSvg(
  { component, className },
  ref
) {
  if (isEmpty(component)) {
    throw new Error('The component is empty.')
  }

  const Component = createElement(
    component.tag,
    {
      ...component.props,
      className: cn(className, component.props?.className as string | undefined),
      ref,
    },
    component.children.map((child) => <DynamicTagComponent key={child.tag} component={child} />)
  )

  return Component
})

/**
 * Renders an SVG component.
 */
const RenderSvg = forwardRef<SVGComponent, SVGComponent & { className?: string }>(
  function RenderSvg({ component, hasErrors, className }, ref) {
    if (isEmpty(component) || hasErrors) {
      return <SVGError />
    }

    return (
      <ErrorBoundary fallback={<SVGError />}>
        <DynamicTagComponent ref={ref} className={className} component={component} />
      </ErrorBoundary>
    )
  }
)

export default RenderSvg
