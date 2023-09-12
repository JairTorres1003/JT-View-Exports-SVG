import { useState } from "react";

import { SvgComponent } from "../interfaces/svgExports";
import { useSvg } from "../provider/SvgProvider";

const useSvgComponentExport = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const { dispatch } = useSvg();

  /**
   * Toggles the expansion state.
   * @returns {void}
   */
  const handleExpanded = (): void => setIsExpanded((previousState) => !previousState);

  /**
   * Copies the provided text to the clipboard and displays a snackbar notification.
   * @param {string} text - The text to be copied to the clipboard.
   * @returns {void}
   */
  const handleCopy = (text: string): void => {
    navigator.clipboard.writeText(text);
    dispatch({ type: "SNACKBAR", payload: { open: true, text } });
  };

  /**
   * Updates the selected SVG component.
   * @param {SvgComponent} item - The SVG component to be selected.
   * @returns {void}
   */
  const handleSelected = (item: SvgComponent): void => {
    dispatch({ type: "SELECTED", payload: item });
  };

  return {
    handleCopy,
    handleExpanded,
    handleSelected,
    isExpanded,
  };
};

export default useSvgComponentExport;
