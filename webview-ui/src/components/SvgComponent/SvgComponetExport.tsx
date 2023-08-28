import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { AccordionDetails } from "@mui/material";

import { SvgExport } from "../../interfaces/svgExports";
import { IconFailExport } from "../../icons";
import RenderSVG from "./RenderSvg";

import {
  Accordion,
  AccordionSummary,
  Grid,
  GridItem,
  Paper,
  Typography,
} from "./SvgComponetExport.style";

const SvgComponetExport: FunctionComponent<
  SvgExport & { setSnackbar: Dispatch<SetStateAction<{ open: boolean; name?: string }>> }
> = (props) => {
  const { file, svgComponents, setSnackbar } = props;
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(name);
    setSnackbar({ open: true, name });
  };

  return (
    <Accordion
      elevation={0}
      expanded={isExpanded}
      onChange={() => setIsExpanded(!isExpanded)}
      TransitionProps={{ timeout: { enter: 300, exit: 100 } }}>
      <AccordionSummary elevation={isExpanded ? 0 : 3}>
        <Typography noWrap>{file && file.relativePath}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          {svgComponents.map((item, index) => (
            <GridItem key={index} onClick={() => handleCopy(item.name)}>
              <Paper elevation={3}>
                {item.component ? <RenderSVG {...item.component} /> : <IconFailExport />}
              </Paper>
              <Typography noWrap>{item.name}</Typography>
            </GridItem>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default SvgComponetExport;
