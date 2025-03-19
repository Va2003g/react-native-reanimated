import React from 'react';
import { View } from 'react-native';
import Svg, { 
  Rect, 
  Path, 
  G, 
  Defs, 
  RadialGradient, 
  Stop, 
  ClipPath,
  Circle
} from 'react-native-svg';

const BulbmojiHappy = ({ width = 125, height = 125 }) => {
  return (
      <Svg width={width} height={height} viewBox="0 0 125 125" fill="none">
        {/* Background bulb shape with gradient */}
        <Rect x="3.5" y="3.5" width="118" height="118" rx="17.5" fill="#FFC107" />
        <Rect x="3.5" y="3.5" width="118" height="118" rx="17.5" fill="url(#paint0_radial_26_216)" />
        <Rect x="3.5" y="3.5" width="118" height="118" rx="17.5" stroke="black" strokeWidth="7" />
        
        {/* Facial features */}
        <G clipPath="url(#clip0_26_216)">
          {/* Left happy eye - curved upward */}
          <Path d="M26 55C26 55 29 50 35 55" stroke="black" strokeWidth="4" strokeLinecap="round" />
          <Circle cx="30" cy="58" r="4" fill="black" />
          
          {/* Right happy eye - curved upward */}
          <Path d="M90 55C90 55 93 50 99 55" stroke="black" strokeWidth="4" strokeLinecap="round" />
          <Circle cx="94" cy="58" r="4" fill="black" />
          
          {/* Happy mouth - wide smile */}
          <Path d="M45 75C45 85 80 85 80 75" stroke="black" strokeWidth="5" strokeLinecap="round" />
          
          {/* Optional rosy cheeks */}
          <Circle cx="30" cy="70" r="7" fill="#FF9999" opacity="0.6" />
          <Circle cx="95" cy="70" r="7" fill="#FF9999" opacity="0.6" />
        </G>
        
        {/* Definitions for gradient and clip path */}
        <Defs>
          <RadialGradient id="paint0_radial_26_216" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62 137.5) rotate(-90) scale(48.5 81.8856)">
            <Stop offset="0" stopColor="#FFC107" />
            <Stop offset="1" stopColor="#FFEB3B" />
          </RadialGradient>
          <ClipPath id="clip0_26_216">
            <Rect x="15" y="40" width="95" height="50" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
  );
};

export default BulbmojiHappy; 