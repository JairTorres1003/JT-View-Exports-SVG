# Support and Detection of Valid SVG Exports

This extension provides support for analyzing and detecting valid SVG components in React source code files. The following points describe the analysis and validations performed by the extension:

1. **Exported**: The extension parses exported components in React, such as functions and variables that store or return a component.

```JSX
// ✅ Correct use
export const CircleBlue = () => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill="blue" />
  </svg>
);
export const CircleGreen = (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill="green" />
  </svg>
);
const CircleYellow = () => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill="yellow" />
  </svg>
);
export default CircleYellow;
// ❌ Invalid use
const CircleRed = (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill="red" />
  </svg>
);
export const IconCircleRed = CircleRed;
```

2. **Fragments**: The extension supports components with fragments (React Fragments) as long as their only child is an SVG or another fragment that ultimately leads to an SVG.

```JSX
// ✅ Correct use
export const CircleBlue = () => (
  <React.Fragment>
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="blue" />
    </svg>
  </React.Fragment>
);
// ❌ Invalid use
export const CircleGreen = (
  <React.Fragment>
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="green" />
    </svg>
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="green" />
    </svg>
  </React.Fragment>
);
```

3. **Validation of xmlns Attribute**: The extension validates that the `xmlns="http://www.w3.org/2000/svg"` attribute is present in the SVG element. This is necessary to ensure that the element is treated as a valid SVG.

```JSX
// ✅ Correct use
export const CircleBlue = () => (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill="blue" />
  </svg>
);
// ❌ Invalid use
export const CircleGreen = (
  <svg width="24" height="24" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill="green" />
  </svg>
);
```

4. **Validation of Declared Properties**: The extension validates the correct use of declared properties in SVG components. It ensures that the properties are declared and used correctly in the JSX.

```JSX
// ✅ Correct use
export const CircleBlue = ({color = "blue", size = 24}) => (
  <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill={color} />
  </svg>
);
// ❌ Invalid use
const color = "blue";
const size = 24;
export const CircleGreen = (
  <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill={color} />
  </svg>
);
```

5. **Framer Motion Support**: This extension also provides support for analyzing and detecting valid SVG components using framer-motion.

```JSX
// ✅ Correct use
import { motion } from "framer-motion";

export const CircleBlue = () => (
  <motion.svg
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.5 }}
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
  >
    <motion.circle cx="50" cy="50" r="40" fill="blue" />
  </motion.svg>
);
```

6. **Validated SVG Tags**: This extension conducts validation checks on different SVG tags to ensure the accuracy of SVG components. The list below displays the SVG tags currently supported and validated by the extension:

| Supported Tags | Supported Tags   | Supported Tags     | Supported Tags      |
| -------------- | ---------------- | ------------------ | ------------------- |
| svg            | animate          | animateMotion      | animateTransform    |
| circle         | clipPath         | defs               | desc                |
| ellipse        | feBlend          | feColorMatrix      | feComponentTransfer |
| feComposite    | feConvolveMatrix | feDiffuseLighting  | feDisplacementMap   |
| feDistantLight | feDropShadow     | feFlood            | feFuncA             |
| feFuncB        | feFuncG          | feFuncR            | feGaussianBlur      |
| feImage        | feMerge          | feMergeNode        | feMorphology        |
| feOffset       | fePointLight     | feSpecularLighting | feSpotLight         |
| feTile         | feTurbulence     | filter             | foreignObject       |
| g              | image            | line               | linearGradient      |
| marker         | mask             | metadata           | mpath               |
| path           | pattern          | polygon            | polyline            |
| radialGradient | rect             | stop               | style               |
| switch         | symbol           | text               | textPath            |
| tspan          | use              | view               |                     |

The extension ensures that the SVG components use only the tags listed above. If any other unsupported tags are used, the extension will raise validation errors to maintain the integrity of the SVG components and ensure they adhere to SVG specifications. Components with invalid tags will not be displayed in the "**View Exports SVG**" panel.
