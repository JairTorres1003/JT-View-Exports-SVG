import { Paper as PaperMui, Typography as TypographyMui, styled } from "@mui/material";
import GridMui from "@mui/material/Unstable_Grid2";

export const Grid = styled(GridMui)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
}));

export const GridItem = styled(GridMui)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  flex: "1 0 100px",
  minWidth: "80px",
}));

export const Paper = styled(PaperMui)(() => ({
  minHeight: 65,
  maxHeight: 65,
  minWidth: 65,
  padding: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}));

export const Typography = styled(TypographyMui)(() => ({
  fontSize: 12,
  textAlign: "center",
}));
