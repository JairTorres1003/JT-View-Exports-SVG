import { useEffect, useState } from "react";
import { SvgExport } from "./interfaces/svgExports";
import { vscode } from "./utilities/vscode";
import SvgComponetExport from "./components/SvgComponetExport";

function App() {
  const [svgComponents, setSvgComponents] = useState<SvgExport[]>([]);

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
      {svgComponents.map((item, index) => (
        <SvgComponetExport {...item} key={index} />
      ))}
    </main>
  );
}

export default App;
