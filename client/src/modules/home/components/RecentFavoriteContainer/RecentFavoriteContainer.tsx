import { Box, Typography } from '@mui/material'
import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { useRecentFavoriteContainer } from '../../hooks/useRecentFavoriteContainer'

import { recentFavoriteContainerClasses } from './RecentFavoriteContainer.classes'
import { BoxRecentFavoriteContainer } from './RecentFavoriteContainer.style'

import { AccordionMenuItem } from '@/core/components/Accordion'
import { CardSvg } from '@/core/components/Cards/CardSvg'
import { RenderSvg } from '@/core/components/SVG/RenderSvg'

interface RecentFavoriteContainerProps {
  /**
   * Type of icons to display in the container.
   * - `recent`: Displays recently used icons.
   * - `favorite`: Displays favorite icons.
   * @default 'recent'
   */
  type?: 'recent' | 'favorite'
}

const RecentFavoriteContainer: FC<RecentFavoriteContainerProps> = ({ type }) => {
  const { icons } = useRecentFavoriteContainer(type)
  const { defaultExpandAll } = useSelector((state) => state.global.configuration)

  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  return (
    <BoxRecentFavoriteContainer>
      <AccordionMenuItem
        label={t('RecentIcons')}
        defaultExpanded={defaultExpandAll}
        slotProps={{ details: { className: recentFavoriteContainerClasses.details } }}
      >
        {icons.map((item) => (
          <React.Fragment key={item.groupKind.id}>
            {icons.length > 1 && (
              <Box className={recentFavoriteContainerClasses.detailsTitle}>
                <Typography variant='subtitle1'>{item.groupKind.label}</Typography>
              </Box>
            )}
            <Box className={recentFavoriteContainerClasses.detailsContent}>
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
    </BoxRecentFavoriteContainer>
  )
}

export default RecentFavoriteContainer
