import { useEffect, useState } from "react";

import { vscode } from "../utilities/vscode";
import useDebounce from "./useDebounce";
import { FinderProps } from "../interfaces/Finder";

const useFinder = (props: FinderProps) => {
  const [value, setValue] = useState<string>("");
  const [stateAnimete, setStateAnimete] = useState(false);
  const debounce = useDebounce(value, 600);

  /**
   * Clear the value and trigger.
   */
  const handleClearValue = () => {
    if (value.trim().length > 0) {
      setValue("");
    }
  };

  const handleStateAnimate = () => setStateAnimete(!stateAnimete);

  useEffect(() => {
    // Request the extension
    vscode.postMessage("searchSvgComponents", debounce.toString());

    // Listen for messages
    vscode.onMessage("filteredSvgComponents", props.handleSvgComponents);

    // Cleanup function to remove the message handler when the component unmounts or dependencies change
    return () => {
      vscode.removeMessageHandler("filteredSvgComponents", props.handleSvgComponents);
    };
  }, [debounce]);

  return {
    handleClearValue,
    handleStateAnimate,
    setValue,
    stateAnimete,
    value,
  };
};

export default useFinder;
