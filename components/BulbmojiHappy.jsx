import * as React from "react";
import Svg, { Rect, Circle, Path } from "react-native-svg";
const SVGComponent = ({ width, height }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 125 125"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect x={3.5} y={3.5} width={118} height={118} rx={17.5} fill="#FFC107" />
    <Rect
      x={3.5}
      y={3.5}
      width={118}
      height={118}
      rx={17.5}
      stroke="black"
      strokeWidth={7}
    />
    <Circle
      cx={11.0834}
      cy={11.0834}
      r={11.0834}
      transform="matrix(-1 0 0 1 107.125 44.0002)"
      fill="black"
    />
    <Circle
      cx={11.0834}
      cy={11.0834}
      r={11.0834}
      transform="matrix(-1 0 0 1 40.1667 44)"
      fill="black"
    />
    <Path
      d="M47.9588 69.3333C46.2099 69.3333 44.7471 70.7888 45.3202 72.4412C47.2254 77.9342 54.0642 82 62.2088 82C70.3534 82 77.1922 77.9342 79.0974 72.4412C79.6705 70.7888 78.2077 69.3333 76.4588 69.3333H47.9588Z"
      fill="black"
    />
  </Svg>
);
export default SVGComponent;
