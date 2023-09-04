import { useEffect, useMemo, useRef, useState } from "react";
import { createTheme } from "@mui/material";

import { SvgExport } from "../interfaces/svgExports";
import { vscode } from "../utilities/vscode";
import i18n from "../i18n";

const useApp = () => {
  const [svgComponents, setSvgComponents] = useState<SvgExport[]>([]);
  const [showMessage, setShowMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fileSelected, setFileSelected] = useState<number | null | undefined>(0);
  const [snackbar, setSnackbar] = useState<{ open: boolean; name?: string }>({
    open: false,
    name: "",
  });
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("light");
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);
  const [resizableWidth, setResizableWidth] = useState<string>("100%");
  const refPortalButton = useRef<HTMLElement>(null);

  /**
   * Handle resizing of the panel.
   * @param e - The resize event.
   * @param direction - The resize direction (e.g., 'left', 'right').
   * @param ref - The reference to the resizable element.
   * @param d - The width and height changes during resizing.
   */
  const handleResize = (e: Event, direction: string, ref: HTMLElement, d: Object) => {
    const newWidth = parseInt(ref.style.width, 10);

    if (!isPanelOpen && newWidth <= 95) {
      setIsPanelOpen(true);
      setResizableWidth("65%");
    } else if (isPanelOpen && newWidth > 95) {
      setIsPanelOpen(false);
    } else if (isPanelOpen && newWidth < 80) {
      setResizableWidth(`${newWidth}%`);
    }
  };

  /**
   * Handle the end of the resizing process.
   * @param e - The resize event.
   * @param direction - The resize direction (e.g., 'left', 'right').
   * @param ref - The reference to the resizable element.
   * @param d - The width and height changes during resizing.
   */
  const handleResizeStop = (e: Event, direction: string, ref: HTMLElement, d: Object) => {
    const newWidth = parseInt(ref.style.width, 10);

    if (isPanelOpen && newWidth >= 81) {
      setIsPanelOpen(false);
      setResizableWidth("100%");
    }
  };

  /**
   * Handle opening or closing the panel.
   */
  const handleOpenPanel = () => {
    setResizableWidth(`${!isPanelOpen ? 65 : 100}%`);
    setIsPanelOpen(!isPanelOpen);
  };

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
   * Handles the extraction of icons from a dropped file.
   * @param fileList The dropped files to extract icons from.
   */
  const handleExtractIcons = (fileList: FileList | null) => {
    setIsLoading(true);
    let fullPaths = [];

    if (fileList && fileList.length > 0) {
      const fileListArray = Array.from(fileList);

      // Create an array of full paths to the dropped files
      // Note: The 'path' property is available only in VS Code extensions
      fullPaths = fileListArray.map((file: any) => file.path);
    }

    vscode.postMessage("extractIconsFile", fullPaths);
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
      setIsLoading(false);
    };
  }, []);

  return {
    fileSelected,
    handleExtractIcons,
    handleOpenPanel,
    handleResize,
    handleResizeStop,
    handleSvgComponents,
    isLoading,
    isPanelOpen,
    resizableWidth,
    refPortalButton,
    setSnackbar,
    showMessage,
    snackbar,
    svgComponents,
    theme,
  };
};

export default useApp;
