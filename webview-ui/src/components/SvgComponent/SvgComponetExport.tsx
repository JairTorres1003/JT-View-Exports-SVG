import { FunctionComponent } from "react";
import { AccordionDetails, Tooltip } from "@mui/material";
import MiddleEllipsis from "react-middle-ellipsis";

import { SvgExport } from "../../interfaces/svgExports";
import { IconFailExport } from "../../icons";
import RenderSVG from "./RenderSvg";

import {
  Accordion,
  AccordionSummary,
  BoxAnimated,
  Grid,
  GridItem,
  Paper,
  Typography,
} from "./SvgComponetExport.style";
import useSvgComponetExport from "../../hooks/useSvgComponetExport";

const SvgComponetExport: FunctionComponent<SvgExport> = (props) => {
  const { file, svgComponents } = props;
  const { handleCopy, handleExpanded, handleSelected, isExpanded } = useSvgComponetExport();

  return (
    <Accordion
      elevation={0}
      expanded={isExpanded}
      onChange={handleExpanded}
      TransitionProps={{ timeout: { enter: 300, exit: 100 } }}>
      <AccordionSummary elevation={isExpanded ? 0 : 3}>
        <div className="AccordionSummary-title">
          <MiddleEllipsis>
            <Tooltip title={file && file.relativePath} arrow>
              <span>{file && file.relativePath}</span>
            </Tooltip>
          </MiddleEllipsis>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          {svgComponents.map((item, index) => (
            <GridItem key={index} onClick={() => handleCopy(item.name)}>
              <Paper elevation={3} onClick={() => handleSelected(item)}>
                {item.isAnimated && <BoxAnimated />}
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
