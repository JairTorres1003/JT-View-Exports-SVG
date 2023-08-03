import { Box, TextField as TextFieldMui, styled } from "@mui/material";

export const BoxFinder = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: 16,
}));

export const TextField = styled(TextFieldMui)(() => ({
  "maxWidth": 600,
  "& .MuiInputBase-root.Mui-focused legend span, & .MuiFormLabel-filled + .MuiInputBase-root legend span":
    {
      opacity: 1,
      svg: { display: "none" },
    },
  "fieldset": {
    "borderColor": "rgba(var(--color-JT-view-export-svg), 0.23)",
    "legend span": {
      position: "absolute",
      color: "transparent",
      display: "block",
      transformOrigin: "left",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "calc(133% - 32px)",
      left: "-5px",
      top: 0,
      transform: "translate(14px, -9px) scale(0.75)",
      background: "var(--vscode-editor-background)",
    },
  },
  "& .MuiFormLabel-finder": {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  ".MuiFormLabel-root.Mui-focused .MuiFormLabel-finder svg, & .MuiFormLabel-filled .MuiFormLabel-finder svg":
    {
      display: "none",
    },
}));
