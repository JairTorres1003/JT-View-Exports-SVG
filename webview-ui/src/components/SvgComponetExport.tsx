import { FunctionComponent } from "react";
import { SvgExport } from "../interfaces/svgExports";
import RenderSVG from "./RenderSvg";
import FailExport from "../icons/FailExport.svg";

const SvgComponetExport: FunctionComponent<SvgExport> = (props) => {
  const { file, svgExports } = props;

  return (
    <div>
      <h4>{file.relativePath}</h4>
      <div>
        {svgExports.map((item, index) => (
          <div key={index}>
            <div>{item.component ? <RenderSVG {...item.component} /> : <FailExport />}</div>
            <h5>{item.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SvgComponetExport;
