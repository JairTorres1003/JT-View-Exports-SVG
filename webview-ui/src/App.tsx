import { Box, ThemeProvider, Typography } from "@mui/material";
import { Finder } from "./components/Finder/Finder";
import SvgComponetExport from "./components/SvgComponent/SvgComponetExport";
import useApp from "./hooks/useApp";

function App() {
  const { setShowMessage, setSvgComponents, showMessage, svgComponents, theme } = useApp();

  return (
    <ThemeProvider theme={theme}>
      <main>
        <Finder setSvgComponents={setSvgComponents} setShowMessage={setShowMessage} />
        {showMessage ? (
          <Box>
            <Typography variant="h1" fontSize={20}>{showMessage}</Typography>
          </Box>
        ) : (
          svgComponents.map((item, index) => <SvgComponetExport {...item} key={index} />)
        )}
      </main>
    </ThemeProvider>
  );
}

export default App;
