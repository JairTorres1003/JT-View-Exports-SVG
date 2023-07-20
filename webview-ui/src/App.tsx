import { useEffect, useState } from "react";
import { Finder } from "./components/Finder";
import { SvgExport } from "./interfaces/svgExports";
import { vscode } from "./utilities/vscode";
import SvgComponetExport from "./components/SvgComponetExport";

function App() {
  const [svgComponents, setSvgComponents] = useState<SvgExport[]>([]);

  /**
   * Handle the SVG components data received from the webview.
   * @param data The SVG components data.
   */
  const handleSvgComponents = (data: any) => {
    setSvgComponents(JSON.parse(data));
  };

  useEffect(() => {
    vscode.postMessage("requestSvgComponents", {});
    vscode.onMessage("svgComponents", handleSvgComponents);

    return () => {
      vscode.removeMessageHandler("svgComponents", handleSvgComponents);
    };
  }, []);

  return (
    <main>
      <Finder setSvgComponents={setSvgComponents} />
      {svgComponents.map((item, index) => (
        <SvgComponetExport {...item} key={index} />
      ))}
    </main>
  );
}

export default App;
