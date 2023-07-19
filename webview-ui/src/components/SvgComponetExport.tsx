import { FunctionComponent } from "react";
import { SvgExport } from "../interfaces/svgExports";
import RenderSVG from "./RenderSvg";
import FailExport from "../icons/FailExport.svg";
import { Grid, GridItem, Paper, Typography } from "./SvgComponetExport.style";

const SvgComponetExport: FunctionComponent<SvgExport> = (props) => {
  const { file, svgComponents } = props;

  return (
    <div>
      <h4>{file.relativePath}</h4>
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
    </div>
  );
};

export default SvgComponetExport;
