import type { SVGComponent, SVGComponentProps } from '@api/interfaces/ViewExportsSVG'
import cn from 'classnames'
import { createElement, forwardRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { SVGError } from '@/assets/icons/indicators'
import { ErrorBoundary } from '@/core/helpers'
import { useAlert } from '@/core/hooks/useAlert'
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
  const { t } = useTranslation(undefined, { keyPrefix: 'errors' })

  if (isEmpty(component)) {
    throw new Error(t('TheComponentIsEmpty'))
  }

  const c = cn(className, component.props.className)

  const Component = createElement(
    component.tag,
    {
      ...component.props,
      className: isEmpty(c) ? undefined : c,
      ref,
    },
    component.children.map((child, index) =>
      typeof child === 'string' ? child : <DynamicTagComponent key={index} component={child} />
    )
  )

  return Component
})

/**
 * Renders an SVG component.
 */
const RenderSvg = forwardRef<SVGComponent, SVGComponent & { className?: string }>(
  function RenderSvg({ component, hasErrors, errors, className }, ref) {
    const { onOpen } = useAlert()

    /**
     * Handles the error component by displaying an alert with the error message.
     */
    const handleErrorComponent = () => {
      if (!errors) return

      onOpen(errors.message, {
        severity: 'error',
        position: { vertical: 'top', horizontal: 'right' },
      })
    }

    useEffect(() => {
      handleErrorComponent()
    }, [errors])

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
