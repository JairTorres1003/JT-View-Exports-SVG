import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { useRecentContainer } from '../../hooks/useRecentContainer'

import { recentContainerClasses } from './RecentContainer.classes'
import { BoxRecentContainer } from './RecentContainer.style'

import { AccordionMenuItem } from '@/core/components/Accordion'
import { CardSvg } from '@/modules/dashboard/components/Cards/CardSvg'
import { RenderSvg } from '@/modules/dashboard/components/SVG/RenderSvg'

const RecentContainer = () => {
  const { icons } = useRecentContainer()
  const { defaultExpandAll } = useSelector((state) => state.global.configuration)

  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  return (
    <BoxRecentContainer>
      <AccordionMenuItem
        label={t('RecentIcons')}
        defaultExpanded={defaultExpandAll}
        slotProps={{ details: { className: recentContainerClasses.details } }}
      >
        {icons.map((item) => (
          <React.Fragment key={item.groupKind.id}>
            {icons.length > 1 && (
              <Box className={recentContainerClasses.detailsTitle}>
                <Typography variant='subtitle1'>{item.groupKind.label}</Typography>
              </Box>
            )}
            <Box className={recentContainerClasses.detailsContent}>
              {item.components.map(({ name, ...restComponent }) => (
                <CardSvg
                  key={`${item.groupKind.id}-${name}`}
                  component={{ ...restComponent, name }}
                >
                  <RenderSvg {...restComponent} name={name} />
                </CardSvg>
              ))}
            </Box>
          </React.Fragment>
        ))}
      </AccordionMenuItem>
    </BoxRecentContainer>
  )
}

export default RecentContainer
