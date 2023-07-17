import { FunctionComponent } from "react";
import { SvgComponentDetails } from "../interfaces/svgExports";

const RenderSVG: FunctionComponent<SvgComponentDetails> = ({ children, componentName, props }) => {
  const Component = componentName;

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
};

export default RenderSVG;
