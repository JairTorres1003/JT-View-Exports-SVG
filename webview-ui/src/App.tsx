import { ThemeProvider } from "@mui/material";
import { Finder } from "./components/Finder";
import SvgComponetExport from "./components/SvgComponetExport";
import useApp from "./hooks/useApp";

function App() {
  const { setSvgComponents, svgComponents, theme } = useApp();

  return (
    <ThemeProvider theme={theme}>
      <main>
        <Finder setSvgComponents={setSvgComponents} />
        {svgComponents.map((item, index) => (
          <SvgComponetExport {...item} key={index} />
        ))}
      </main>
    </ThemeProvider>
  );
}

export default App;
