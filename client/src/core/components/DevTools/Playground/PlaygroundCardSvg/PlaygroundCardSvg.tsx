import type { FC } from 'react'
import { useSelector } from 'react-redux'

import { BoxPlaygroundCardSvg } from './PlaygroundCardSvg.style'

import { RenderSvg } from '@/core/components/SVG/RenderSvg'

interface PlaygroundCardSvgProps {
  bgColor: string
  ref: React.Ref<SVGElement>
}

const PlaygroundCardSvg: FC<PlaygroundCardSvgProps> = ({ bgColor, ref }) => {
  const recentlySelected = useSelector((state) => state.playground.recentlySelected)

  return (
    <BoxPlaygroundCardSvg bgColor={bgColor}>
      {recentlySelected && (
        <RenderSvg
          {...recentlySelected}
          ref={ref}
          key={`${recentlySelected.name} - ${recentlySelected.location.file.absolutePath}`}
        />
      )}
    </BoxPlaygroundCardSvg>
  )
}

export default PlaygroundCardSvg
