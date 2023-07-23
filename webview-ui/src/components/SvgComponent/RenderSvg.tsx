import { FunctionComponent, useEffect, useRef } from "react";
import { SvgComponentDetails } from "../../interfaces/svgExports";
import { isArray } from "lodash";
import { motion } from "framer-motion";
import { IconFailExport } from "../../icons/IconFailExport";

const RenderSVG: FunctionComponent<SvgComponentDetails> = ({ children, componentName, props }) => {
  const svgRef = useRef<HTMLElement>(null);
  const isSvg = componentName.includes("svg");

  useEffect(() => {
    if (svgRef.current) {
      const height = svgRef.current.clientHeight;
      let scale = (height > 30 ? 0 : 1) + height / 65;
      svgRef.current.style.transform = `scale(${scale})`;
    }
  }, []);

  if (isArray(children)) {
    let Component: any = componentName;

    if (componentName.includes("motion")) {
      Component = motion(componentName.split(".")[1]);
    }

    if (children.length > 0) {
      return (
        <Component {...props} ref={isSvg ? svgRef : null}>
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
