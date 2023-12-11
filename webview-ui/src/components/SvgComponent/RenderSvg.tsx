import { type FC, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import { IconFailExport } from '../../icons'
import { type SvgComponentDetails } from '../../interfaces/svgExports'

const RenderSVG: FC<SvgComponentDetails & { fullSize?: boolean }> = (props) => {
  const { children, fullSize, tag, isMotion } = props

  const svgRef = useRef<HTMLElement>(null)
  const isSvg = typeof tag === 'string' && tag === 'svg'

  useEffect(() => {
    if (svgRef.current && !fullSize) {
      const width = svgRef.current.clientWidth
      const height = svgRef.current.clientHeight
      const padding = 20 // 20px: 10px padding on each side
      const minWidthFather = 94
      const maxHeightFather = 65

      const maxWidthScale = (minWidthFather - padding) / (width + padding)
      const maxHeightScale = (maxHeightFather - padding) / (height + padding)

      const scale = Math.min(maxWidthScale, maxHeightScale)

      svgRef.current.style.transform = `scale(${scale})`
    }
  }, [])

  if (typeof tag !== 'string') {
    return <IconFailExport />
  }

  const Component = isMotion ? motion(tag) : tag
  const componentProps = isMotion
    ? {
        ...props.props,
        transition: {
          ...props.props.transition,
          repeat: Infinity,
        },
      }
    : { ...props.props }

  if (Array.isArray(children) && children.length > 0) {
    return (
      <Component
        {...componentProps}
        {...(isSvg
          ? {
              width: '100%',
              height: '100%',
              style: { transform: 'scale(1)', ...(props.props.style ?? {}) },
            }
          : {})}
        ref={isSvg ? svgRef : null}
      >
        {children.map((child, index) => (
          <RenderSVG {...child} key={index} />
        ))}
      </Component>
    )
  }

  return <Component {...componentProps} />
}

export default RenderSVG
