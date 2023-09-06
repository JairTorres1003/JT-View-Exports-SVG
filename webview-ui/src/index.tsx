import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import SvgProvider from "./provider/SvgProvider";
import "./styles/reset.css";
import "./i18n";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <SvgProvider>
      <App />
    </SvgProvider>
  </React.StrictMode>
);
