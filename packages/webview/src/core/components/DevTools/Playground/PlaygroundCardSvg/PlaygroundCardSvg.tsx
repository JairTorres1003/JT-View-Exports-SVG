import { useSelector } from 'react-redux'

import { RenderSvg } from '@/core/components/SVG/RenderSvg'

import { BoxPlaygroundCardSvg } from './PlaygroundCardSvg.style'

interface PlaygroundCardSvgProps {
  bgColor: string
  ref: React.Ref<SVGElement>
}

const PlaygroundCardSvg: React.FC<PlaygroundCardSvgProps> = ({ bgColor, ref }) => {
  const recentlySelected = useSelector((state) => state.playground.recentlySelected)

  return (
    <BoxPlaygroundCardSvg bgColor={bgColor}>
      {recentlySelected && (
        <RenderSvg
          {...recentlySelected}
          ref={ref}
          key={`${recentlySelected.name} - ${recentlySelected.location.id}`}
        />
      )}
    </BoxPlaygroundCardSvg>
  )
}

export default PlaygroundCardSvg
