import { Box, TextField } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { FinderProps } from "../interfaces/Finder";
import useDebounce from "../hooks/useDebounce";
import { vscode } from "../utilities/vscode";
import Lupe from "../icons/Lupe.svg";

export const Finder: FunctionComponent<FinderProps> = (props) => {
  const [value, setValue] = useState<string>("");
  const debounce = useDebounce(value, 600);

  /**
   * Handle the SVG components data received from the webview.
   * @param data The SVG components data.
   */
  const handleSvgComponents = (data: any) => {
    props.setSvgComponents(JSON.parse(data));
  };

  useEffect(() => {
    if (debounce.length >= 3) {
      vscode.postMessage("searchSvgComponents", {});
      vscode.onMessage("svgComponents", handleSvgComponents);
    }

    return () => {
      vscode.removeMessageHandler("svgComponents", handleSvgComponents);
    };
  }, [debounce]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
      <TextField
        fullWidth
        value={value}
        id="finder-svg"
        variant="outlined"
        label="Search icons"
        sx={{ maxWidth: 600 }}
        onChange={(val) => setValue(val.target.value)}
        InputProps={{
          endAdornment: <LupeIcon />,
        }}
      />
    </Box>
  );
};

const LupeIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 16 16"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
  </svg>
);
