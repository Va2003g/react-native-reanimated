import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
  useAnimatedReaction,
} from "react-native-reanimated";
import BulbmojiAngry from "../../components/BulbmojiAngry";
import BulbmojiSad from "../../components/BulbmojiSad";
import BulbmojiHappy from "../../components/BulbmojiHappy";
import DragArrow from "@/components/DragArrow";
import { Gesture } from "react-native-gesture-handler";
import { GestureDetector } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;

function SentimentWidget() {
  // Shared values for animations
  const dragArrowPosition = useSharedValue({ top: 0, left: 0 });

  // Local state
  const [isDragging, setIsDragging] = useState(false);
  const [isArrowBeingDragged, setIsArrowBeingDragged] = useState(false);

  // Get screen dimensions for calculations

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const prevTranslateX = useSharedValue(0);
  const prevTranslateY = useSharedValue(0);

  const innerCircleRadius = 150;
  const mediumCircleRadius = 300;
  const outerCircleRadius = 430;
  const [percentage, setPercentage] = useState(0);
  const distance = Math.sqrt(
    translateX.value * translateX.value + translateY.value * translateY.value
  );

  // Initial position for drag arrow
  useEffect(() => {
    dragArrowPosition.value = {
      top: 96, // Container height - arrow size/2
      left: windowWidth / 2 - 16 + 10, // Centered + offset
    };
  }, []);

  // Animated styles
  const animatedCircleStyle = useAnimatedStyle(() => {
    return {
      width: distance * 2,
      height: distance,
      borderTopLeftRadius: distance,
      borderTopRightRadius: distance,
      zIndex: 60,
    };
  });

  const dragArrowAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  const angryEmojiAnimatedStyle = useAnimatedStyle(() => {
    // const distance = Math.sqrt(
    //   translateX.value * translateX.value + translateY.value * translateY.value
    // );

    // Instead of returning different objects, use conditional values
    const calculatedOpacity = distance > 75 ? 0 : 1;
    const calculatedScale = distance > 75 ? 0 : 1;
    const calculatedTranslateY = distance > 75 ? -20 : 0;

    return {
      opacity: withTiming(calculatedOpacity, {
        duration: 2000,
      }),
      transform: [
        { translateY: withTiming(calculatedTranslateY, { duration: 500 }) },
        { scale: withTiming(calculatedScale, { duration: 500 }) },
      ],
      zIndex: 600,
    };
  });

  const sadEmojiAnimatedStyle = useAnimatedStyle(() => {
    // const distance = Math.sqrt(
    //   translateX.value * translateX.value + translateY.value * translateY.value
    // );

    // Instead of returning different objects, use conditional values
    const calculatedOpacity = distance > 150 ? 0 : 1;
    const calculatedScale = distance > 150 ? 0 : 1;
    const calculatedTranslateY = distance > 150 ? -20 : 0;

    return {
      transform: [
        { translateY: withTiming(calculatedTranslateY, { duration: 500 }) },
        { scale: withTiming(calculatedScale, { duration: 500 }) },
      ],
      opacity: withTiming(calculatedOpacity, {
        duration: 400,
      }),
      zIndex: 600,
    };
  });

  const dragGesture = Gesture.Pan()
    .onStart((event) => {
      prevTranslateX.value = translateX.value;
      prevTranslateY.value = translateY.value;
    })
    .onUpdate((event) => {
      // Calculate the new position
      const newX = event.translationX + prevTranslateX.value;
      const newY = event.translationY + prevTranslateY.value;

      // Restrict vertical movement to upward only (Y values must be <= 0)
      const restrictedY = Math.min(newY, 0);

      // Calculate distance from origin
      const distance = Math.sqrt(newX * newX + restrictedY * restrictedY);

      if (distance <= 215) {
        // Inside the circle — move freely (but with Y restriction)
        translateX.value = newX;
        translateY.value = restrictedY;
      } else {
        // Outside the circle — constrain to circular path
        const angle = Math.atan2(restrictedY, newX);
        translateX.value = Math.cos(angle) * 215;
        translateY.value = Math.sin(angle) * 215;
      }
    });

  useAnimatedReaction(
    () => {
      const distance = Math.sqrt(
        translateX.value * translateX.value +
          translateY.value * translateY.value
      );
      return distance;
    },
    (distance) => {
      if (distance !== null && !isNaN(distance)) {
        // Added safety check
        const percentage = Math.round((distance / 215) * 100);
        runOnJS(setPercentage)(percentage);
      }
    },
    [translateX.value, translateY.value]
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>How likely I am to return...</Text>
        <Text style={styles.percentageText}>{percentage}%</Text>
      </View>

      <View
        style={{
          position: "relative",
        }}
      >
        <View style={styles.circleContainer}>
          {/* Static circles */}
          <View style={[styles.outerBoundaryCircle]}>
            <Animated.View style={[styles.happyEmoji]}>
              <BulbmojiHappy width={25} height={25} />
            </Animated.View>
            <View style={[styles.mediumBoundaryCircle]}>
              <Animated.View style={[styles.sadEmoji, sadEmojiAnimatedStyle]}>
                <BulbmojiSad width={25} height={25} />
              </Animated.View>
              <View style={[styles.innerBoundaryCircle]}>
                <Animated.View
                  style={[styles.angryEmoji, angryEmojiAnimatedStyle]}
                >
                  <BulbmojiAngry width={25} height={25} />
                </Animated.View>
              </View>
            </View>
            <Animated.View style={[styles.circle, animatedCircleStyle]}>
              {distance > 150 && (
                <View style={[styles.mediumBoundaryWithBorderCircle]}>
                  <View
                    style={[
                      styles.innerBoundaryWithBorderCircle,
                      { position: "relative", zIndex: 100 },
                    ]}
                  >
                    <View
                      style={{
                        width: "100%",
                        borderWidth: 2,
                        borderColor: "rgb(0, 82, 204)",
                        backgroundColor: "red",
                        position: "absolute",
                        zIndex: 200,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      width: "100%",
                      borderWidth: 2,
                      borderColor: "rgb(0, 82, 204)",
                      backgroundColor: "red",
                      position: "absolute",
                      zIndex: 300,
                    }}
                  />
                </View>
              )}
              {distance < 150 && distance > 75 && (
                <View
                  style={[
                    styles.innerBoundaryWithBorderCircle,
                    { position: "relative", zIndex: 100 },
                  ]}
                >
                  <View
                    style={{
                      width: "100%",
                      borderWidth: 2,
                      borderColor: "rgb(0, 82, 204)",
                      backgroundColor: "red",
                      position: "absolute",
                      zIndex: 200,
                    }}
                  />
                </View>
              )}
            </Animated.View>
          </View>

          {/* Drag arrow */}
          <GestureDetector gesture={dragGesture}>
            <Animated.View style={[styles.dragArrow, dragArrowAnimatedStyle]}>
              <DragArrow />
            </Animated.View>
          </GestureDetector>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    width: windowWidth,
    justifyContent: "center",
    // flex: 1,
    // only for testing purposes
    top: "50%",
    transform: [{ translateY: -100 }],
    backgroundColor: "#F3F4F5",
    borderWidth: 1,
    borderColor: "#F3F4F5",
    borderRadius: 12,
  },
  header: {
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "#E0E0E0",
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 17,
  },
  headerText: {
    fontSize: 13,
    fontWeight: "500",
    color: "black",
    letterSpacing: -0.52,
  },
  percentageText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  circleContainer: {
    position: "relative",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 12,
    alignItems: "center",
    overflow: "hidden",
    marginHorizontal: "auto",
    height: 200,
    // transform: [{ translateY: -15 }],
  },
  outerBoundaryCircle: {
    width: windowWidth * 0.94,
    height: 215,
    borderTopLeftRadius: 215,
    borderTopRightRadius: 215,
    justifyContent: "flex-end",
    alignItems: "center",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(224, 224, 224, 0.5)",
    gap: 23,
    transform: [{ translateY: -15 }],
  },
  mediumBoundaryCircle: {
    width: 300,
    height: 150,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(224, 224, 224, 0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    gap: 23,
  },
  mediumBoundaryWithBorderCircle: {
    width: 300,
    height: 150,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    borderWidth: 2,
    borderStyle: "dotted",
    borderColor: "white",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  innerBoundaryWithBorderCircle: {
    width: 150,
    height: 75,
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
    borderWidth: 2,
    borderStyle: "dotted",
    borderColor: "white",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  innerBoundaryCircle: {
    width: 150,
    height: 75,
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
    borderWidth: 2,
    borderStyle: "solid",
    backgroundColor: "#e0e0e080",
    borderColor: "rgba(224, 224, 224, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  angryEmoji: {
    zIndex: 600,
  },
  sadEmoji: {
    zIndex: 400,
  },
  happyEmoji: {
    zIndex: 500,
  },
  dragArrow: {
    position: "absolute",
    width: 33,
    height: 33,
    zIndex: 9999,
    bottom: 0,
    left: "45%",
  },
  circle: {
    position: "absolute",
    width: 100,
    height: 100,
    justifyContent: "flex-end",
    alignItems: "center",
    borderTopLeftRadius: "100%",
    borderTopRightRadius: "100%",
    backgroundColor: "rgb(0, 82, 204)",
    bottom: 0,
    zIndex: 60,
    alignSelf: "center",
  },
});

export default SentimentWidget;
