import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
const SIZE = 100;
const CIRCLE_RADIUS = SIZE * 2;
const DragSqauare = () => {
  const translateX = useSharedValue(0);
  const prevTranslateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const prevTranslateY = useSharedValue(0);
  const handlePanGesture = Gesture.Pan()
    .onStart((event) => {
      prevTranslateX.value = translateX.value;
      prevTranslateY.value = translateY.value;
    })
    .onUpdate((event) => {
      translateX.value = prevTranslateX.value + event.translationX;
      translateY.value = prevTranslateY.value + event.translationY;
    })
    .onEnd(() => {
      const distance = Math.sqrt(
        translateX.value * translateX.value + translateY.value * translateY.value
      );
      if (distance < CIRCLE_RADIUS + SIZE / 2) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <GestureDetector gesture={handlePanGesture}>
          <Animated.View style={[styles.square, animatedStyle]} />
        </GestureDetector>
      </View>
    </View>
  );
};

export default DragSqauare;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "red",
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "blue",
    borderRadius: 20,
  },
});
