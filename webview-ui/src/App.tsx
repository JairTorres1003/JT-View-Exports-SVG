import { Box, ThemeProvider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Fragment } from "react";
import { Resizable } from "re-resizable";

import { Finder } from "./components/Finder/Finder";
import SvgComponetExport from "./components/SvgComponent/SvgComponetExport";
import { DropZone } from "./components/DropZone/DropZone";
import { Loading } from "./components/Loading/Loading";
import PanelDeveloperTools from "./components/Panels/PanelDeveloperTools";
import { Snackbar } from "./components/Snackbar/Snackbar";

import useApp from "./hooks/useApp";

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
  } = useApp();
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <main>
        {isLoading ? (
          <Loading />
        ) : fileSelected && fileSelected > 0 ? (
          <Fragment>
            <div className="BoxContainer">
              <Resizable
                defaultSize={{ width: "100%", height: "100%" }}
                maxWidth="100%"
                minWidth="150"
                minHeight="100%"
                maxHeight="100%"
                enable={{ right: true }}
                onResize={handleResize}
                onResizeStop={handleResizeStop}
                size={{ width: resizableWidth, height: "100%" }}>
                <Box className="BoxContainer-gallery">
                  <Finder
                    isOpenPanel={isPanelOpen}
                    handleSvgComponents={handleSvgComponents}
                    refPortalButton={refPortalButton}
                  />
                  <Box className="BoxContainer-gallery-container">
                    {showMessage ? (
                      <Box>
                        <Typography variant="h1" fontSize={20}>
                          {showMessage}
                        </Typography>
                      </Box>
                    ) : (
                      svgComponents.map((item, index) => (
                        <SvgComponetExport {...item} key={index} />
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
          <DropZone onExtractIcons={handleExtractIcons} />
        )}
      </main>
    </ThemeProvider>
  );
}

export default App;
