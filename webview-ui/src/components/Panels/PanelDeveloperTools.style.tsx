import { Box, Paper, Typography, styled } from "@mui/material";

import { BoxViewerSvgProps } from "../../interfaces/styled.props";

export const BoxPanelDeveloperTools = styled(Paper)(() => ({
  "width": "100%",
  "display": "flex",
  "flexDirection": "column",
  "minWidth": 0,
  "borderRadius": 0,
  "padding": "2rem 1.5rem",
  "background": "rgba(0 0 0 / 10%)",
  "& .PaperBox-title": {
    "minHeight": 56,
    "display": "flex",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "position": "relative",
    "& > .MuiButtonBase-root": { position: "absolute", top: 5, left: 0 },
  },
}));

export const TitlePanel = styled(Typography)(() => ({
  marginBottom: "16px",
  width: "100%",
  textAlign: "center",
  fontWeight: 600,
  userSelect: "none",
  padding: "0px 25px",
}));

export const BoxDeveloper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  paddingTop: "24px",
}));

export const BoxViewerSvg = styled(({ mode = false, ...props }: BoxViewerSvgProps) => (
  <Paper {...props} className={`mode-${mode ? "dark" : "light"} ${props.className}`} />
))(({ mode }) => ({
  width: "100%",
  height: "max-content",
  borderRadius: 10,
  backgroundColor: mode ? "#101418" : "#fff",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  border: `1px solid #${mode ? "dae0e714" : "E5EAF2"}`,
  color: `#${mode ? "fff" : "000"}`,
  svg: { aspectRatio: "1 / 1" },
}));

export const ContainerSvg = styled(Box)(() => ({
  "width": "100%",
  "height": "auto",
  "display": "flex",
  "justifyContent": "center",
  "alignItems": "center",
  "padding": "14px",
  "aspectRatio": "1 / 1",
  "& svg.empty-selection": { filter: "grayscale(0.8)" },
}));

export const BoxTools = styled(Box)(() => ({
  "minHeight": 32,
  "height": "max-content",
  "padding": 10,
  ".mode-dark &": {
    backgroundColor: "rgba(20, 26, 31, 0.2)",
    borderTop: "1px solid #dae0e714",
  },
  ".mode-light &": {
    backgroundColor: "rgba(243, 246, 249, 0.2)",
    borderTop: "1px solid #E5EAF2",
  },
}));
