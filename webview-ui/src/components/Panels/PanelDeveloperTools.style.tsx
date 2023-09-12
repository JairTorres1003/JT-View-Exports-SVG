import { Box, Paper, Typography, styled } from "@mui/material";

export const BoxPanelDeveloperTools = styled(Paper)(() => ({
  "width": "100%",
  "display": "flex",
  "flexDirection": "column",
  "minWidth": 0,
  "borderRadius": 0,
  "padding": "2rem 1.5rem",
  "background": "rgba(0 0 0 / 10%)",
  "& .PaperBox-title": {
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
  userSelect: "none",
}));

export const BoxDeveloper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  paddingTop: "24px",
}));

export const ContainerSvg = styled(Paper)(() => ({
  "width": "100%",
  "height": "auto",
  "display": "flex",
  "justifyContent": "center",
  "alignItems": "center",
  "backgroundColor": "#fff",
  "borderRadius": 10,
  "padding": "14px",
  "aspectRatio": 1,
  "color": "rgb(0, 0, 0)",
  "& svg.empty-selection": { filter: "grayscale(0.75)" },
}));
