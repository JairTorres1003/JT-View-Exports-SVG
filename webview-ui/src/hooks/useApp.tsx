import { useEffect, useMemo, useState } from "react";
import { SvgExport } from "../interfaces/svgExports";
import { vscode } from "../utilities/vscode";
import { createTheme } from "@mui/material";

const useApp = () => {
  const [svgComponents, setSvgComponents] = useState<SvgExport[]>([]);
  const [showMessage, setShowMessage] = useState<string | null>(null);
  const [snackbar, setSnackbar] = useState<{ open: boolean; name?: string }>({
    open: false,
    name: "",
  });
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("light");

  /**
   * Handle the SVG components data received from the webview.
   * @param data The SVG components data.
   */
  const handleSvgComponents = (data: any) => {
    const response = JSON.parse(data);

    if (response.messageError) {
      setShowMessage(response.messageError);
    } else {
      setShowMessage(null);
      setSvgComponents(response);
    }
  };

  /**
   * Handles the current theme and updates the application state.
   * @param theme The current theme ("dark" or "light").
   */
  const handleCurrentTheme = (theme: "dark" | "light") => {
    setCurrentTheme(theme);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: currentTheme,
          text: {
            disabled: "rgba(var(--color-JT-view-export-svg), 0.38)",
            primary: "rgba(var(--color-JT-view-export-svg), 0.87)",
            secondary: "rgba(var(--color-JT-view-export-svg), 0.6)",
          },
        },
      }),
    [currentTheme]
  );

  useEffect(() => {
    // Request the extension
    vscode.postMessage("requestSvgComponents");
    vscode.postMessage("getCurrentTheme");

    // Listen for messages
    vscode.onMessage("svgComponents", handleSvgComponents);
    vscode.onMessage("currentTheme", handleCurrentTheme);

    // Clean up by removing the message handlers when the component is unmounted
    return () => {
      vscode.removeMessageHandler("svgComponents", handleSvgComponents);
      vscode.removeMessageHandler("currentTheme", handleCurrentTheme);
    };
  }, []);

  return {
    setShowMessage,
    setSnackbar,
    setSvgComponents,
    showMessage,
    snackbar,
    svgComponents,
    theme,
  };
};

export default useApp;
