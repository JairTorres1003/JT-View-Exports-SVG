import { useState } from "react";
import { VSCodeButton } from "@vscode/webview-ui-toolkit/react";
import "./App.css";

function App() {
  const [value, setValue] = useState<number>(0);
  return (
    <main>
      <h1>Count: {value}</h1>
      <VSCodeButton onClick={() => setValue(value + 1)}>Howdy!</VSCodeButton>
    </main>
  );
}

export default App;
