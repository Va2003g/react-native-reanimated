import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const DragArrow = () => {
  return (
    <Svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    >
      <Circle
        cx="20.9999"
        cy="21"
        r="19.1013"
        transform="rotate(1.06877 20.9999 21)"
        fill="black"
        stroke="white"
        stroke-width="1.79732"
      />
      <Path
        d="M21 24.1429L21 30.6172"
        stroke="white"
        stroke-width="1.88572"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M21 12.0743L21 17.6686"
        stroke="white"
        stroke-width="1.88572"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M30.3029 21L11.76 21"
        stroke="white"
        stroke-width="1.88572"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M24.7714 13.7714L21 10L17.2286 13.7714"
        stroke="white"
        stroke-width="1.88572"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M28.2286 24.7715L32 21L28.2286 17.2286"
        stroke="white"
        stroke-width="1.88572"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.7714 17.2286L10 21L13.7714 24.7715"
        stroke="white"
        stroke-width="1.88572"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.2286 28.2286L21 32L24.7714 28.2286"
        stroke="white"
        stroke-width="1.88572"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default DragArrow;

const styles = StyleSheet.create({});
