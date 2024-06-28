import { Box, Divider, IconButton, Portal } from '@mui/material'
import React, { useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { useSwitchDarkMode } from '../../hooks/useSwitch'
import {
  EmptySelectionIcon,
  IconFailExport,
  IconFragmentCode,
  IconPencilSquare,
  IconSettings,
} from '../../icons'
import { type PanelDeveloperToolsProps } from '../../interfaces/PanelDeveloperTools'
import { useSvg } from '../../provider/SvgProvider'
import { isEmpty } from '../../utilities/misc'
import { vscode } from '../../utilities/vscode'
import { Delay } from '../Delay/Delay'
import { Playground } from '../Editor/Playground'
import { Snackbar } from '../Snackbar/SnackbarPlayground'
import RenderSVG from '../SvgComponent/RenderSvg'
import { SwitchDarkMode } from '../Switch'

import {
  BoxCode,
  BoxDeveloper,
  BoxPanelDeveloperTools,
  BoxTools,
  BoxViewerSvg,
  ContainerSvg,
  TitlePanel,
} from './PanelDeveloperTools.style'

const PanelDeveloperTools: FC<PanelDeveloperToolsProps> = (props): React.JSX.Element => {
  const { isOpenPanel, handleOpenPanel, refPortalButton } = props
  const { t } = useTranslation()
  const {
    state: { selectedSvg, selectedSvgPath },
  } = useSvg()
  const { checkedMode, onChangeMode } = useSwitchDarkMode({ keyMode: 'svgCardMode' })

  const [showPlayground, setShowPlayground] = useState<boolean>(false)

  /**
   * Opens the selected SVG file in the editor.
   */
  const handleOpenFile = (): void => {
    if (selectedSvgPath === null || isEmpty(selectedSvg)) return

    const location = selectedSvg.location?.start
    const path = `${selectedSvgPath}:${location?.line ?? 0},${location?.column ?? 0}`

    vscode.postMessage('openFile', path)
  }

  return (
    <BoxPanelDeveloperTools elevation={isOpenPanel ? 3 : 0}>
      <div className='PaperBox-title'>
        <Portal container={refPortalButton?.current} disablePortal={isOpenPanel}>
          <IconButton
            size='small'
            title={t(`${isOpenPanel ? 'Close' : 'DeveloperTools'}`)}
            onClick={handleOpenPanel}
            sx={{ mb: '16px', color: 'var(--color-JT-view-export-svg)' }}
          >
            <IconSettings state={isOpenPanel} />
          </IconButton>
        </Portal>
        <TitlePanel noWrap fontSize={13} variant='h1'>
          {t('DeveloperTools')}
        </TitlePanel>
      </div>
      <Divider sx={{ mt: '-8px', mb: '24px' }} />
      {isOpenPanel && (
        <BoxDeveloper>
          <BoxViewerSvg elevation={3} mode={checkedMode}>
            <Snackbar />
            <ContainerSvg>
              <div className='container-svg-card'>
                {isEmpty(selectedSvg) ? (
                  <EmptySelectionIcon size='100%' className='empty-selection' />
                ) : !isEmpty(selectedSvg.component) ? (
                  <RenderSVG {...selectedSvg.component} fullSize />
                ) : (
                  <IconFailExport />
                )}
              </div>
            </ContainerSvg>
            <BoxTools>
              <SwitchDarkMode onChange={onChangeMode} checked={checkedMode} />
              {!isEmpty(selectedSvg) && (
                <Box display='flex' gap='6px'>
                  <IconButton
                    size='small'
                    sx={{ color: 'inherit', p: '3px' }}
                    title={t('EditIcon')}
                    onClick={handleOpenFile}
                  >
                    <IconPencilSquare size={18} />
                  </IconButton>
                  <IconButton
                    size='small'
                    sx={{ color: 'inherit', p: '3px' }}
                    title={`${showPlayground ? t('hide') : t('show')} ${t('code')}`}
                    onClick={() => {
                      setShowPlayground(!showPlayground)
                    }}
                  >
                    <IconFragmentCode size={18} />
                  </IconButton>
                </Box>
              )}
            </BoxTools>
            {!isEmpty(selectedSvg) && (
              <BoxCode animate={showPlayground ? 'open' : 'closed'}>
                <Delay show={showPlayground}>
                  <Playground />
                </Delay>
              </BoxCode>
            )}
          </BoxViewerSvg>
        </BoxDeveloper>
      )}
    </BoxPanelDeveloperTools>
  )
}

export default PanelDeveloperTools
