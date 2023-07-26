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
      const width = svgRef.current.clientWidth;
      const height = svgRef.current.clientHeight;
      const padding = 20; // 20px: 10px padding on each side
      const minWidthFather = 94;
      const maxHeightFather = 65;

      const maxWidthScale = (minWidthFather - padding) / (width + padding);
      const maxHeightScale = (maxHeightFather - padding) / (height + padding);

      const scale = Math.min(maxWidthScale, maxHeightScale);

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