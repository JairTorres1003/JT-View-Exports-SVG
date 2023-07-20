import { FunctionComponent, useState } from "react";
import { SvgExport } from "../interfaces/svgExports";
import RenderSVG from "./RenderSvg";
import FailExport from "../icons/FailExport.svg";
import {
  Accordion,
  AccordionSummary,
  Grid,
  GridItem,
  Paper,
  Typography,
} from "./SvgComponetExport.style";
import { AccordionDetails } from "@mui/material";

const SvgComponetExport: FunctionComponent<SvgExport> = (props) => {
  const { file, svgComponents } = props;
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <Accordion elevation={0} expanded={isExpanded} onChange={() => setIsExpanded(!isExpanded)}>
      <AccordionSummary elevation={isExpanded ? 0 : 3}>
        <Typography noWrap>{file.relativePath}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          {svgComponents.map((item, index) => (
            <GridItem key={index}>
              <Paper elevation={3}>
                {item.component ? <RenderSVG {...item.component} /> : <FailExport />}
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
