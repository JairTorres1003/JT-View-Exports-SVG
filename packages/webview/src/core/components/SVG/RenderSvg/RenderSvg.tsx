import type { SVGComponent, SVGComponentProps } from '@jt-view-exports-svg/core'
import cn from 'classnames'
import { domAnimation, LazyMotion, m, useReducedMotion } from 'framer-motion'
import React, { createElement, forwardRef, type SVGElementType, useEffect, useId } from 'react'
import { useTranslation } from 'react-i18next'

import IconSVGError from '@/assets/icons/indicators/svg-error'
import { ErrorBoundary } from '@/core/helpers'
import { useAlert } from '@/core/hooks/useAlert'
import isEmpty from '@/utils/is-empty'

interface RenderSvgProps {
  component: SVGComponentProps
  className?: string
  rootId?: string
}

const hashString = (value: string): string => {
  let hash = 5381
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) + hash + value.charCodeAt(i)
    hash &= 0xffffffff
  }

  return Math.abs(hash).toString(36)
}

const getChildKey = (child: SVGComponentProps): string => {
  const id = child.props?.id ?? child.props?.key ?? child.props?.name
  if (typeof id === 'string' && id.length > 0) {
    return id
  }

  const seed = `${child.tag}-${child.isMotion ? 'motion' : 'static'}-${child.isAnimated ? 'anim' : 'noanim'}-${JSON.stringify(child.props)}-${child.children.length}`
  return `svg-${hashString(seed)}`
}
/**
 * Renders an SVG component dynamically based on the provided props.
 *
 * @throws Throws an error if the component is empty.
 * @returns The rendered SVG component.
 */
const DynamicTagComponent = ({ component, className, rootId }: RenderSvgProps) => {
  const { t } = useTranslation('errors')
  const prefersReducedMotion = useReducedMotion()

  if (isEmpty(component)) {
    throw new Error(t('component-empty'))
  }

  const c = cn(className, component.props.className)

  const Tag =
    component.isMotion && !prefersReducedMotion ? m[component.tag as SVGElementType] : component.tag

  const Component = createElement(
    Tag as React.ElementType,
    {
      ...component.props,
      className: isEmpty(c) ? undefined : c,
      ...(rootId ? { 'data-render-svg-id': rootId } : {}),
    },
    component.children.map((child) =>
      typeof child === 'string' ? (
        child
      ) : (
        <DynamicTagComponent key={getChildKey(child)} component={child} />
      )
    )
  )

  return Component
}

/**
 * Renders an SVG component.
 */
const RenderSvg = forwardRef<
  SVGElement,
  SVGComponent & { className?: string; showErrors?: boolean }
>(function RenderSvg({ component, hasErrors, errors, className, showErrors = true }, ref) {
  const { onOpen } = useAlert()
  const rootId = useId()

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

  useEffect(() => {
    const element = document.querySelector(`[data-render-svg-id="${rootId}"]`) as SVGElement | null

    if (typeof ref === 'function') {
      ref(element)
      return () => {
        ref(null)
      }
    }

    if (!ref) return

    ref.current = element

    return () => {
      ref.current = null
    }
  }, [ref, rootId])

  if (isEmpty(component) || hasErrors) {
    return <IconSVGError />
  }

  return (
    <LazyMotion features={domAnimation}>
      <ErrorBoundary fallback={<IconSVGError />}>
        <DynamicTagComponent rootId={rootId} className={className} component={component} />
      </ErrorBoundary>
    </LazyMotion>
  )
})

export default RenderSvg
