import { Alert, Box, Snackbar, ThemeProvider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Fragment } from "react";
import { Resizable } from "re-resizable";

import { Finder } from "./components/Finder/Finder";
import SvgComponetExport from "./components/SvgComponent/SvgComponetExport";
import { DropZone } from "./components/DropZone/DropZone";
import { Loading } from "./components/Loading/Loading";

import useApp from "./hooks/useApp";
import PanelsSettings from "./components/Panels/PanelsSettings";
import SvgProvider from "./provider/SvgProvider";

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
    setSnackbar,
    showMessage,
    snackbar,
    svgComponents,
    theme,
  } = useApp();
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <SvgProvider>
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
                    {showMessage ? (
                      <Box>
                        <Typography variant="h1" fontSize={20}>
                          {showMessage}
                        </Typography>
                      </Box>
                    ) : (
                      svgComponents.map((item, index) => (
                        <SvgComponetExport {...item} key={index} setSnackbar={setSnackbar} />
                      ))
                    )}
                  </Box>
                </Resizable>
                <PanelsSettings
                  isOpenPanel={isPanelOpen}
                  handleOpenPanel={handleOpenPanel}
                  refPortalButton={refPortalButton}
                />
              </div>
              <Snackbar
                key={snackbar.name}
                open={snackbar.open}
                autoHideDuration={2000}
                onClose={() => setSnackbar({ open: false, name: "" })}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
                <Alert severity="success">
                  <Typography fontSize={12}>
                    {`${t("Copied")} ${snackbar.name && `'${snackbar.name}' `}${t("ToClipboard")}`}
                  </Typography>
                </Alert>
              </Snackbar>
            </Fragment>
          ) : (
            <DropZone onExtractIcons={handleExtractIcons} />
          )}
        </main>
      </SvgProvider>
    </ThemeProvider>
  );
}

export default App;
