import MiddleEllipsis from 'react-middle-ellipsis'

import { useSelector } from '@/providers/redux/store'
import { Accordion, AccordionDetails, AccordionSummary, Tooltip, Typography } from '@mui/material'
// import { useContainerComponents } from '@/hooks/components/useContainerComponents'

export const ContainerComponents = () => {
  // const {} = useContainerComponents()
  const { components } = useSelector((state) => state.svg)

  return (
    <div>
      {components.map((item) => (
        <Accordion disableGutters key={item.groupKind}>
          <AccordionSummary
            id={`${item.groupKind}-header`}
            aria-controls={`${item.groupKind}-content`}
          >
            <MiddleEllipsis>
              <Tooltip placement='top' title={item.labelGroupKind}>
                <Typography component='span' noWrap>
                  {item.labelGroupKind}
                </Typography>
              </Tooltip>
            </MiddleEllipsis>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Total exports {item.totalExports}</Typography>
            <Typography>Total no exports {item.totalNoExports}</Typography>
            <Typography>Total SVG {item.totalSVG}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
