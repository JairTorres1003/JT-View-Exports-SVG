import { FunctionComponent, useEffect, useRef } from "react";
import { SvgComponentDetails } from "../../interfaces/svgExports";
import { isArray } from "lodash";
import { motion } from "framer-motion";
import { IconFailExport } from "../../icons";

const RenderSVG: FunctionComponent<SvgComponentDetails> = ({ children, tag, props }) => {
  const svgRef = useRef<HTMLElement>(null);
  const isValidChild = typeof tag === "string";
  const isSvg = isValidChild && tag.includes("svg");

  useEffect(() => {
    if (svgRef.current) {
      let width = svgRef.current.clientWidth;
      const height = svgRef.current.clientHeight;
      const padding = 20; // 20px: 10px padding on each side
      const minWidthFather = 94;
      const maxHeightFather = 65;

      width = width > minWidthFather ? width % minWidthFather : Math.round(minWidthFather / width);

      const maxWidthScale = (minWidthFather - padding) / (width + padding);
      const maxHeightScale = (maxHeightFather - padding) / (height + padding);

      const scale = Math.min(maxWidthScale, maxHeightScale);

      svgRef.current.style.transform = `scale(${scale})`;
    }
  }, []);

  if (isArray(children) && isValidChild) {
    let Component: any = tag;

    if (tag.includes("motion")) {
      Component = motion(tag.split(".")[1]);
      const transition: { [key: string]: any } = { ...props.transition };
      transition.repeat = Infinity;
      props = { ...props, transition };
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
