import { useEffect, useState } from "react";
import { vscode } from "../utilities/vscode";
import useDebounce from "./useDebounce";
import { FinderProps } from "../interfaces/Finder";

const useFinder = (props: FinderProps) => {
  const [value, setValue] = useState<string>("");
  const debounce = useDebounce(value, 600);

  /**
   * Handles the received SVG components data from the webview context.
   * @param data The data received from the webview context.
   */
  const handleSvgComponents = (data: any) => {
    const response = JSON.parse(data);

    if (response.messageError) {
      props.setShowMessage(response.messageError);
    } else {
      props.setShowMessage(null);
      props.setSvgComponents(response);
    }
  };

  /**
   * Clear the value and trigger.
   */
  const handleClearValue = () => {
    if (value.trim().length > 0) {
      setValue("");
    }
  };

  useEffect(() => {
    props.setSvgComponents([]);
    // Request the extension
    vscode.postMessage("searchSvgComponents", debounce.toString());

    // Listen for messages
    vscode.onMessage("filteredSvgComponents", handleSvgComponents);

    // Cleanup function to remove the message handler when the component unmounts or dependencies change
    return () => {
      vscode.removeMessageHandler("filteredSvgComponents", handleSvgComponents);
    };
  }, [debounce]);

  return {
    handleClearValue,
    setValue,
    value,
  };
};

export default useFinder;
