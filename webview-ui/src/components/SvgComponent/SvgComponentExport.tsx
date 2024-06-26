import { AccordionDetails, IconButton, Tooltip } from '@mui/material'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import MiddleEllipsis from 'react-middle-ellipsis'

import useSvgComponentExport from '../../hooks/useSvgComponentExport'
import { IconFailExport, IconPencilSquare } from '../../icons'
import { type SvgExport } from '../../interfaces/svgExports'

import RenderSVG from './RenderSvg'
import {
  Accordion,
  AccordionSummary,
  BoxAnimated,
  Grid,
  GridItem,
  Paper,
  Typography,
} from './SvgComponentExport.style'

const SvgComponentExport: FC<SvgExport> = (props) => {
  const { file, svgComponents } = props
  const { handleCopy, handleExpanded, handleSelected, handleOpenFile, isExpanded } =
    useSvgComponentExport()
  const { t } = useTranslation()

  return (
    <Accordion
      elevation={0}
      expanded={isExpanded}
      onChange={handleExpanded}
      TransitionProps={{ timeout: { enter: 300, exit: 100 } }}
    >
      <AccordionSummary elevation={isExpanded ? 0 : 3}>
        <div className='AccordionSummary-title'>
          <div className='AccordionSummary-title-text'>
            <MiddleEllipsis>
              <Tooltip title={file.relativePath} arrow>
                <span>{file.relativePath}</span>
              </Tooltip>
            </MiddleEllipsis>
          </div>
          <IconButton
            size='small'
            className='IconButton-edit'
            title={t('EditFile')}
            onClick={() => {
              handleOpenFile(file.absolutePath)
            }}
          >
            <IconPencilSquare size={18} />
          </IconButton>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          {svgComponents.map((item, index) => (
            <GridItem
              key={index}
              onClick={() => {
                handleCopy(item.name)
              }}
            >
              <Paper
                elevation={3}
                onClick={() => {
                  handleSelected(item, file)
                }}
              >
                {item.isAnimated === true && <BoxAnimated />}
                {item.component !== undefined ? (
                  <RenderSVG {...item.component} />
                ) : (
                  <IconFailExport />
                )}
              </Paper>
              <Tooltip title={item.name} arrow>
                <Typography noWrap>{item.name}</Typography>
              </Tooltip>
            </GridItem>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

export default SvgComponentExport
