import {
  Accordion as AccordionMui,
  AccordionSummary as AccordionSummaryMui,
  Paper as PaperMui,
  Typography as TypographyMui,
  styled,
  AccordionSummaryProps,
  PaperProps,
} from "@mui/material";
import GridMui from "@mui/material/Unstable_Grid2";

const ArrowForwardIcon = () => (
  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" width={17}>
    <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
  </svg>
);

export const Accordion = styled(AccordionMui)(() => ({
  "backgroundColor": "inherit",
  "margin": "0 !important",
  "&::before": {
    display: "none",
  },
}));

export const AccordionSummary = styled((props: AccordionSummaryProps | PaperProps) => (
  <AccordionSummaryMui component={PaperMui} expandIcon={<ArrowForwardIcon />} {...props} />
))(({ theme }) => ({
  "flexDirection": "row-reverse",
  "minHeight": "60px !important",
  "maxHeight": 60,
  "backgroundColor": "#fff",
  "borderRadius": 4,
  "transition": "background-color 0.2s",
  "color": "#000",
  "&.Mui-expanded": {
    backgroundColor: "transparent",
    borderBottom: "1px outset",
    borderRadius: 0,
    color: "inherit",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
    fill: "var(--color-JT-view-export-svg)",
  },
  "& .MuiAccordionSummary-content, & .MuiAccordionSummary-content.Mui-expanded": {
    "margin": 0,
    "marginLeft": theme.spacing(1),
    "& .MuiTypography-root": {
      fontSize: "16px",
    },
  },
}));

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
  color: "inherit",
}));
