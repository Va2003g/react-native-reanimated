import React from 'react';
import { View } from 'react-native';
import Svg, { 
  Rect, 
  Path, 
  G, 
  Defs, 
  RadialGradient, 
  Stop, 
  ClipPath 
} from 'react-native-svg';

const BulbmojiSad = ({ width = 125, height = 125 }) => {
  return (
      <Svg width={width} height={height} viewBox="0 0 125 125" fill="none">
        <Rect x="3.5" y="3.5" width="118" height="118" rx="17.5" fill="#FFC107" />
        <Rect x="3.5" y="3.5" width="118" height="118" rx="17.5" fill="url(#paint0_radial_26_214)" />
        <Rect x="3.5" y="3.5" width="118" height="118" rx="17.5" stroke="black" strokeWidth="7" />
        <G clipPath="url(#clip0_26_214)">
          <Path fillRule="evenodd" clipRule="evenodd" d="M19.2149 55.7268C18.5234 56.126 18.1194 56.9032 18.3058 57.6795C19.4743 62.5482 23.8563 66.1667 29.0834 66.1667C35.2045 66.1667 40.1667 61.2045 40.1667 55.0834C40.1667 51.9223 38.8434 49.0704 36.7206 47.0513C36.141 46.5 35.2647 46.4604 34.572 46.8604L19.2149 55.7268Z" fill="black" />
          <Path fillRule="evenodd" clipRule="evenodd" d="M105.952 55.7268C106.643 56.126 107.047 56.9032 106.861 57.6795C105.692 62.5482 101.31 66.1667 96.0834 66.1667C89.9622 66.1667 85 61.2045 85 55.0834C85 51.9223 86.3233 49.0704 88.4462 47.0513C89.0257 46.5 89.902 46.4604 90.5947 46.8604L105.952 55.7268Z" fill="black" />
          <Path d="M76.4588 82C78.2077 82 79.6705 80.5445 79.0974 78.8921C77.1922 73.3991 70.3534 69.3333 62.2088 69.3333C54.0642 69.3333 47.2254 73.3991 45.3202 78.8921C44.7471 80.5445 46.2099 82 47.9588 82L76.4588 82Z" fill="black" />
        </G>
        <Defs>
          <RadialGradient id="paint0_radial_26_214" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62 137.5) rotate(-90) scale(48.5 81.8856)">
            <Stop offset="0" stopColor="#FFC107" />
            <Stop offset="1" stopColor="#FFA000" />
          </RadialGradient>
          <ClipPath id="clip0_26_214">
            <Rect x="18" y="46" width="89" height="36" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
  );
};

export default BulbmojiSad; 