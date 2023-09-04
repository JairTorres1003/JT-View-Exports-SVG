import { Box, Paper, Typography, styled } from "@mui/material";

export const BoxPanelsSettings = styled(Paper)(() => ({
  "width": "100%",
  "display": "flex",
  "flexDirection": "column",
  "minWidth": 0,
  "borderRadius": 0,
  "padding": "2rem 1.5rem",
  "background": "rgba(0 0 0 / 10%)",
  "& .PapeerBox-title": {
    minHeight: 56,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}));

export const TitlePanel = styled(Typography)(() => ({
  marginBottom: "16px",
  width: "100%",
  textAlign: "center",
  fontWeight: 600,
}));

export const BoxDeveloper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  paddingTop: "8px",
}));

export const ContainerSvg = styled(Box)(() => ({
  "width": "100%",
  "display": "flex",
  "justifyContent": "center",
  "alignItems": "center",
  "border": "1px dashed rgba(var(--color-JT-view-export-svg), 0.8)",
  "borderRadius": 10,
  "padding": "14px",
  "& svg.empty-selection": { filter: "grayscale(0.75)" },
}));
