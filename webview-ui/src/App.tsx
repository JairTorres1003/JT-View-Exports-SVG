import { Alert, Box, Snackbar, ThemeProvider, Typography } from "@mui/material";
import { Finder } from "./components/Finder/Finder";
import SvgComponetExport from "./components/SvgComponent/SvgComponetExport";
import { useTranslation } from "react-i18next";
import useApp from "./hooks/useApp";

function App() {
  const {
    setShowMessage,
    setSnackbar,
    setSvgComponents,
    showMessage,
    snackbar,
    svgComponents,
    theme,
  } = useApp();
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <main>
        <Finder setSvgComponents={setSvgComponents} setShowMessage={setShowMessage} />
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
      </main>
    </ThemeProvider>
  );
}

export default App;
