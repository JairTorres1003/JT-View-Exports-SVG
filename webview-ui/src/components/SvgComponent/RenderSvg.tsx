import { FunctionComponent } from "react";
import { SvgComponentDetails } from "../../interfaces/svgExports";
import { isArray } from "lodash";
import { motion } from "framer-motion";
import { IconFailExport } from "../../icons/IconFailExport";

const RenderSVG: FunctionComponent<SvgComponentDetails> = ({ children, componentName, props }) => {
  if (isArray(children)) {
    let Component: any = componentName;

    if (componentName.includes("motion")) {
      Component = motion(componentName.split(".")[1]);
    }

    if (children.length > 0) {
      return (
        <Component {...props}>
          {children.map((child, index) => (
            <RenderSVG {...child} key={index} />
          ))}
        </Component>
      );
    }

    return <Component {...props} />;
  }

  return <IconFailExport />;
};

export default RenderSVG;
