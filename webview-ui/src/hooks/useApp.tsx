import { useEffect, useMemo, useState } from "react";
import { createTheme } from "@mui/material";

import { SvgExport } from "../interfaces/svgExports";
import { vscode } from "../utilities/vscode";
import i18n from "../i18n";

const useApp = () => {
  const [svgComponents, setSvgComponents] = useState<SvgExport[]>([]);
  const [showMessage, setShowMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fileSelected, setFileSelected] = useState<number | null | undefined>(0);
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
      setFileSelected(response?.fileSelected);
    } else {
      setShowMessage(null);
      setSvgComponents(response);
      setFileSelected(response?.length);
    }

    setIsLoading(false);
  };

  /**
   * Handles the current theme and updates the application state.
   * @param theme The current theme ("dark" or "light").
   */
  const handleCurrentTheme = (theme: "dark" | "light") => {
    setCurrentTheme(theme);
  };

  /**
   * Handles the selection of a language and sets the chosen language in the state.
   * @param {string} lang - The language code of the selected language.
   */
  const handleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
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
    setIsLoading(true);
    // Request the extension
    vscode.postMessage("requestSvgComponents");
    vscode.postMessage("getCurrentTheme");
    vscode.postMessage("getTranslations");

    // Listen for messages
    vscode.onMessage("svgComponents", handleSvgComponents);
    vscode.onMessage("currentTheme", handleCurrentTheme);
    vscode.onMessage("language", handleLanguage);

    // Clean up by removing the message handlers when the component is unmounted
    return () => {
      vscode.removeMessageHandler("currentTheme", handleCurrentTheme);
      vscode.removeMessageHandler("language", handleLanguage);
    };
  }, []);

  return {
    fileSelected,
    isLoading,
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
