import { Box, ThemeProvider, Typography } from '@mui/material'
import { Fragment } from 'react'
import { Resizable } from 're-resizable'

import AssetFiles from './components/AssetFiles'
import { Finder } from './components/Finder/Finder'
import SvgComponentExport from './components/SvgComponent/SvgComponentExport'
import { DropZone } from './components/DropZone/DropZone'
import { Loading } from './components/Loading/Loading'
import PanelDeveloperTools from './components/Panels/PanelDeveloperTools'
import { Snackbar } from './components/Snackbar/Snackbar'

import useApp from './hooks/useApp'
import { useVSCode } from './provider/VSCodeProvider'

function App() {
  const {
    fileSelected,
    handleExtractIcons,
    handleOpenPanel,
    handleResize,
    handleResizeStop,
    handleSvgComponents,
    isLoading,
    isPanelOpen,
    resizableWidth,
    refPortalButton,
    showMessage,
    svgComponents,
    theme,
  } = useApp()
  const {
    state: { styles },
  } = useVSCode()

  return (
    <ThemeProvider theme={theme}>
      <main style={{ ...styles, lineHeight: `${styles.lineHeight ?? 12}px` }}>
        {isLoading ? (
          <Loading />
        ) : fileSelected && fileSelected > 0 ? (
          <Fragment>
            <div className='BoxContainer'>
              <Resizable
                defaultSize={{ width: '100%', height: '100%' }}
                className='Resizable-Box'
                maxWidth='100%'
                minWidth='300'
                minHeight='100%'
                maxHeight='100%'
                enable={{ right: true }}
                onResize={handleResize}
                onResizeStop={handleResizeStop}
                size={{ width: resizableWidth, height: '100%' }}
              >
                <Box className='BoxContainer-gallery'>
                  <Finder
                    isOpenPanel={isPanelOpen}
                    handleSvgComponents={handleSvgComponents}
                    refPortalButton={refPortalButton}
                  />
                  <Box className='BoxContainer-gallery-container'>
                    {showMessage ? (
                      <Box>
                        <Typography variant='h1' fontSize={20}>
                          {showMessage}
                        </Typography>
                      </Box>
                    ) : (
                      svgComponents.map((item, index) => (
                        <SvgComponentExport key={index} {...item} />
                      ))
                    )}
                  </Box>
                </Box>
              </Resizable>
              <PanelDeveloperTools
                isOpenPanel={isPanelOpen}
                handleOpenPanel={handleOpenPanel}
                refPortalButton={refPortalButton}
              />
            </div>
            <Snackbar />
          </Fragment>
        ) : (
          <>
            <DropZone onExtractIcons={handleExtractIcons} />
            <AssetFiles />
          </>
        )}
      </main>
    </ThemeProvider>
  )
}

export default App
