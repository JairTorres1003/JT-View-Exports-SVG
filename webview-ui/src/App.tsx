import { Alert, Box, Snackbar, ThemeProvider, Typography } from "@mui/material";
import { Finder } from "./components/Finder/Finder";
import SvgComponetExport from "./components/SvgComponent/SvgComponetExport";
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
              Copied {snackbar.name && `'${snackbar.name}' `}to clipboard
            </Typography>
          </Alert>
        </Snackbar>
      </main>
    </ThemeProvider>
  );
}

export default App;
