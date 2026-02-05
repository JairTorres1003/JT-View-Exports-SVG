import type { SVGComponent, SVGComponentProps } from '@api/types/ViewExportsSVG'
import cn from 'classnames'
import { motion } from 'framer-motion'
import React, { createElement, forwardRef, type SVGElementType, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import IconSVGError from '@/assets/icons/indicators/svg-error'
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
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- this is a dynamic component with different tags
const DynamicTagComponent = forwardRef<any, RenderSvgProps>(function RenderSvg(
  { component, className },
  ref
) {
  const { t } = useTranslation(undefined, { keyPrefix: 'errors' })

  if (isEmpty(component)) {
    throw new Error(t('TheComponentIsEmpty'))
  }

  const c = cn(className, component.props.className)

  const Tag = component.isMotion ? motion[component.tag as SVGElementType] : component.tag

  const Component = createElement(
    Tag as React.ElementType,
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
const RenderSvg = forwardRef<
  SVGElement,
  SVGComponent & { className?: string; showErrors?: boolean }
>(function RenderSvg({ component, hasErrors, errors, className, showErrors = true }, ref) {
  const { onOpen } = useAlert()

  /**
   * Handles the error component by displaying an alert with the error message.
   */
  const handleErrorComponent = () => {
    if (!errors || !showErrors) return

    onOpen(errors.message, {
      severity: 'error',
      position: { vertical: 'top', horizontal: 'right' },
    })
  }

  useEffect(() => {
    handleErrorComponent()
  }, [errors])

  if (isEmpty(component) || hasErrors) {
    return <IconSVGError />
  }

  return (
    <ErrorBoundary fallback={<IconSVGError />}>
      <DynamicTagComponent ref={ref} className={className} component={component} />
    </ErrorBoundary>
  )
})

export default RenderSvg
