import { FunctionComponent, useState } from "react";
import { SvgExport } from "../../interfaces/svgExports";
import RenderSVG from "./RenderSvg";
import {
  Accordion,
  AccordionSummary,
  Grid,
  GridItem,
  Paper,
  Typography,
} from "./SvgComponetExport.style";
import { AccordionDetails } from "@mui/material";
import { IconFailExport } from "../../icons/IconFailExport";

const SvgComponetExport: FunctionComponent<SvgExport> = (props) => {
  const { file, svgComponents } = props;
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <Accordion
      elevation={0}
      expanded={isExpanded}
      onChange={() => setIsExpanded(!isExpanded)}
      TransitionProps={{ timeout: { enter: 300, exit: 100 } }}>
      <AccordionSummary elevation={isExpanded ? 0 : 3}>
        <Typography noWrap>{file.relativePath}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          {svgComponents.map((item, index) => (
            <GridItem key={index}>
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
