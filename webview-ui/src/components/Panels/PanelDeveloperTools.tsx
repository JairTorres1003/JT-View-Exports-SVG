import { useState, type FC } from 'react'
import { Divider, IconButton, Portal } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { useSvg } from '../../provider/SvgProvider'
import { useSwitchDarkMode } from '../../hooks/useSwitch'

import { type PanelDeveloperToolsProps } from '../../interfaces/PanelDeveloperTools'
import { EmptySelectionIcon, IconFailExport, IconFragmentCode, IconSettings } from '../../icons'
import {
  BoxCode,
  BoxDeveloper,
  BoxPanelDeveloperTools,
  BoxTools,
  BoxViewerSvg,
  ContainerSvg,
  TitlePanel,
} from './PanelDeveloperTools.style'
import { Playground } from '../Editor/Playground'
import RenderSVG from '../SvgComponent/RenderSvg'
import { SwitchDarkMode } from '../Switch'

const PanelDeveloperTools: FC<PanelDeveloperToolsProps> = (props) => {
  const { isOpenPanel, handleOpenPanel, refPortalButton } = props
  const { t } = useTranslation()
  const {
    state: { selectedSvg },
  } = useSvg()
  const { checkedMode, onChangeMode } = useSwitchDarkMode({ keyMode: 'svgCardMode' })

  const [showPlayground, setShowPlayground] = useState<boolean>(false)

  return (
    <BoxPanelDeveloperTools elevation={isOpenPanel ? 3 : 0}>
      <div className='PaperBox-title'>
        <Portal container={refPortalButton?.current} disablePortal={isOpenPanel}>
          <IconButton
            size='small'
            title={t(`${isOpenPanel ? 'Close' : 'DeveloperTools'}`)}
            onClick={handleOpenPanel}
            sx={{ mb: '16px', color: 'rgba(var(--color-JT-view-export-svg))' }}
          >
            <IconSettings state={isOpenPanel} />
          </IconButton>
        </Portal>
        <TitlePanel noWrap fontSize={13} variant='h1'>
          {t('DeveloperTools')}
        </TitlePanel>
      </div>
      <Divider sx={{ mt: '-8px' }} />
      {isOpenPanel && (
        <BoxDeveloper>
          <BoxViewerSvg elevation={3} mode={checkedMode}>
            <ContainerSvg>
              {!selectedSvg ? (
                <EmptySelectionIcon size='100%' className='empty-selection' />
              ) : selectedSvg.component ? (
                <RenderSVG {...selectedSvg.component} fullSize />
              ) : (
                <IconFailExport />
              )}
            </ContainerSvg>
            <BoxTools>
              <SwitchDarkMode onChange={onChangeMode} checked={checkedMode} />
              {selectedSvg && (
                <IconButton
                  size='small'
                  sx={{ color: 'inherit', p: '3px' }}
                  title='view code'
                  onClick={() => {
                    setShowPlayground(!showPlayground)
                  }}
                >
                  <IconFragmentCode size={18} />
                </IconButton>
              )}
            </BoxTools>
            {selectedSvg && showPlayground && (
              <BoxCode>
                <Playground />
              </BoxCode>
            )}
          </BoxViewerSvg>
        </BoxDeveloper>
      )}
    </BoxPanelDeveloperTools>
  )
}

export default PanelDeveloperTools
