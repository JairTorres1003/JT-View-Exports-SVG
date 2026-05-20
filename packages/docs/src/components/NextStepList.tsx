import DocCard from '@site/src/components/DocCard'
import GridStagger from '@site/src/components/GridStagger'

import { NEXT_STEPS, type NextStepKey } from '../constants/next-steps'

const NextStepList: React.FC<{ list: NextStepKey[] }> = ({ list }) => {
  return (
    <GridStagger>
      {list.map((key) => {
        const step = NEXT_STEPS[key]

        return <DocCard key={key} {...step} icon={<step.icon />} />
      })}
    </GridStagger>
  )
}

export default NextStepList
