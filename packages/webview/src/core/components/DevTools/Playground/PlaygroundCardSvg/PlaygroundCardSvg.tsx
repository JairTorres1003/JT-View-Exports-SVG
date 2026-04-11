import { RenderSvg } from '@/core/components/SVG/RenderSvg'
import { useAppSelector } from '@/store/hooks'

import { BoxPlaygroundCardSvg } from './PlaygroundCardSvg.style'

interface PlaygroundCardSvgProps {
  bgColor: string
  ref: React.Ref<SVGElement>
}

const PlaygroundCardSvg: React.FC<PlaygroundCardSvgProps> = ({ bgColor, ref }) => {
  const recentlySelected = useAppSelector((state) => state.playground.recentlySelected)

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
