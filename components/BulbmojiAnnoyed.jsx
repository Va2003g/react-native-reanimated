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
  Line,
  Circle
} from 'react-native-svg';

const BulbmojiAnnoyed = ({ width = 125, height = 125 }) => {
  return (
      <Svg width={width} height={height} viewBox="0 0 125 125" fill="none">
        {/* Background bulb shape with gradient */}
        <Rect x="3.5" y="3.5" width="118" height="118" rx="17.5" fill="#FFC107" />
        <Rect x="3.5" y="3.5" width="118" height="118" rx="17.5" fill="url(#paint0_radial_26_217)" />
        <Rect x="3.5" y="3.5" width="118" height="118" rx="17.5" stroke="black" strokeWidth="7" />
        
        {/* Facial features */}
        <G clipPath="url(#clip0_26_217)">
          {/* Left eyebrow - slightly furrowed */}
          <Line x1="20" y1="48" x2="35" y2="46" stroke="black" strokeWidth="4" strokeLinecap="round" />
          
          {/* Right eyebrow - slightly furrowed */}
          <Line x1="90" y1="46" x2="105" y2="48" stroke="black" strokeWidth="4" strokeLinecap="round" />
          
          {/* Left eye */}
          <Circle cx="28" cy="58" r="5" fill="black" />
          
          {/* Right eye */}
          <Circle cx="97" cy="58" r="5" fill="black" />
          
          {/* Annoyed mouth - slight frown, asymmetrical */}
          <Path d="M45 77C48 74 77 80 80 77" stroke="black" strokeWidth="4" strokeLinecap="round" />
          
          {/* One raised eyebrow effect */}
          <Line x1="90" y1="43" x2="105" y2="45" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </G>
        
        {/* Definitions for gradient and clip path */}
        <Defs>
          <RadialGradient id="paint0_radial_26_217" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62 137.5) rotate(-90) scale(48.5 81.8856)">
            <Stop offset="0" stopColor="#FFC107" />
          </RadialGradient>
          <ClipPath id="clip0_26_217">
            <Rect x="15" y="40" width="95" height="50" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
  );
};

export default BulbmojiAnnoyed; 