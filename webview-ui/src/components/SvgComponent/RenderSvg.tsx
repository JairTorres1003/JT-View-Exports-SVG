import { FunctionComponent, useEffect, useRef } from "react";
import { isArray } from "lodash";
import { motion } from "framer-motion";

import { IconFailExport } from "../../icons";
import { SvgComponentDetails } from "../../interfaces/svgExports";

const RenderSVG: FunctionComponent<SvgComponentDetails & { fullSize?: boolean }> = (properties) => {
  const { children, fullSize, tag, isMotion } = properties;
  let props = properties.props;

  const svgRef = useRef<HTMLElement>(null);
  const isValidChild = typeof tag === "string";
  const isSvg = isValidChild && tag === "svg";

  const fullSizeProps = fullSize
    ? {
        width: "100%",
        height: "100%",
        style: {
          transform: "scale(1)",
        },
      }
    : {};

  useEffect(() => {
    if (svgRef.current && !fullSize) {
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

  if (isArray(children) && isValidChild) {
    let Component: any = tag;

    if (isMotion) {
      Component = motion(tag);
      const transition: { [key: string]: any } = { ...props.transition };
      transition.repeat = Infinity;
      props = { ...props, transition };
    }

    if (children.length > 0) {
      return (
        <Component {...props} {...(isSvg ? fullSizeProps : {})} ref={isSvg ? svgRef : null}>
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
