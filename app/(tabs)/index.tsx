// import React, { useEffect } from "react";
// import { View, Text } from "react-native";
// import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring } from "react-native-reanimated";

// export default function TabOneScreen() {
//   const progress = useSharedValue(0); // Shared value initialized to 0
//   useEffect(() => {
//     // Animate to 1 over 500ms, then spring back to 0.5
//     progress.value = withTiming(1, { duration: 500 }, () => {
//       progress.value = withSpring(0.5);
//     });
//   }, []);

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ scale: progress.value }],
//     };
//   });

//   return (
//     <Animated.View
//       style={[
//         animatedStyle,
//         { width: 100, height: 100, backgroundColor: "blue" },
//       ]}
//     />
//   );
// }

import { Link } from "expo-router";
import React, { useEffect } from "react";
import { Button, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
} from "react-native-reanimated";

export default function TabOneScreen() {
  const progress = useSharedValue(0);
  const width = useSharedValue(100);
  useEffect(() => {
    // Repeat the animation infinitely
    progress.value = withRepeat(
      withTiming(1, { duration: 500 }), // Animate to 1
      -1, // -1 means infinite repetition
      true // Reverse the animation on each loop
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: progress.value }],
    };
  });
  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  return (
    <View>
      <Animated.View
        style={[
          animatedStyle,
          { width: 100, height: 100, backgroundColor: "blue" },
        ]}
      />
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: "#b58df1",
          borderRadius: 20,
        }}
      />
      <Button title="click me" onPress={handlePress} />
      <Link href="/two">Go to screen two</Link>
    </View>
  );
}
