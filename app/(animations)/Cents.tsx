import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  PanResponder,
  StyleSheet,
  Dimensions,
  Image,
  Vibration,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import BulbmojiAngry from "../../components/BulbmojiAngry";
import BulbmojiSad from "../../components/BulbmojiSad";
import BulbmojiHappy from "../../components/BulbmojiHappy";
import DragArrow from "@/components/DragArrow";

// Mock hook for vibration since we're converting from web
const useVibration = () => {
  const isVibrationSupported = true;

  const triggerVibration = (type: "singlePulse" | "longPulse") => {
    if (type === "singlePulse") {
      Vibration.vibrate(10);
    } else {
      Vibration.vibrate(100);
    }
  };

  const stopVibration = () => {
    Vibration.cancel();
  };

  return { isVibrationSupported, triggerVibration, stopVibration };
};

function SentimentWidget({
  setHeight,
  mainContainerRef,
  dragPercentage,
  setDragPercentage,
}: {
  mainContainerRef: React.RefObject<View>;
  setHeight: React.Dispatch<React.SetStateAction<string>>;
  dragPercentage: number;
  setDragPercentage: (score: number) => void;
}) {
  const { isVibrationSupported, triggerVibration, stopVibration } =
    useVibration();

  // Shared values for animations
  const circleSize = useSharedValue(68);
  const dragArrowPosition = useSharedValue({ top: 0, left: 0 });
  const angryOpacity = useSharedValue(0);
  const sadOpacity = useSharedValue(0);
  const happyOpacity = useSharedValue(0);

  // Local state
  const [isDragging, setIsDragging] = useState(false);
  const [isArrowBeingDragged, setIsArrowBeingDragged] = useState(false);

  // Refs for tracking gesture state
  const startYRef = useRef(0);
  const lastValidPosition = useRef({ percentage: 0, size: 68 });
  const initialSizeRef = useRef(68);
  const arrowDragStartYRef = useRef(0);
  const arrowInitialCircleSizeRef = useRef(68);

  // Get screen dimensions for calculations
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;


  // Calculate percentage based on circle size
  const calculatePercentage = (size: number): number => {
    if (size <= 150) {
      return Math.round(((size - 68) / (150 - 68)) * 33);
    } else if (size <= 299) {
      return Math.round(33 + ((size - 150) / (299 - 150)) * 33);
    } else {
      return Math.round(66 + ((size - 299) / (430 - 299)) * 34);
    }
  };

  // Update emoji visibility based on percentage
  useEffect(() => {
    if (dragPercentage <= 33) {
      angryOpacity.value = withTiming(1, { duration: 300 });
      sadOpacity.value = withTiming(0.6, { duration: 300 });
      happyOpacity.value = withTiming(0, { duration: 300 });
    } else if (dragPercentage <= 66) {
      angryOpacity.value = withTiming(0, { duration: 300 });
      sadOpacity.value = withTiming(1, { duration: 300 });
      happyOpacity.value = withTiming(0.6, { duration: 300 });
    } else {
      angryOpacity.value = withTiming(0, { duration: 300 });
      sadOpacity.value = withTiming(0, { duration: 300 });
      happyOpacity.value = withTiming(1, { duration: 300 });
    }
  }, [dragPercentage]);

  // Clean up vibration on unmount
  useEffect(() => {
    return () => {
      if (isVibrationSupported) {
        stopVibration();
      }
    };
  }, []);

  // Initial position for drag arrow
  useEffect(() => {
    dragArrowPosition.value = {
      top: 196 - 16, // Container height - arrow size/2
      left: windowWidth / 2 - 16 + 10, // Centered + offset
    };
  }, []);

  // Animated styles
  const animatedCircleStyle = useAnimatedStyle(() => {
    return {
      width: circleSize.value,
      height: circleSize.value,
      transform: [
        { translateX: -circleSize.value / 2 },
        { translateY: -circleSize.value / 2 },
      ],
    };
  });

  const dragArrowAnimatedStyle = useAnimatedStyle(() => {
    return {
      top: dragArrowPosition.value.top,
      left: dragArrowPosition.value.left,
    };
  });

  const angryEmojiAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: angryOpacity.value,
      transform: [
        { scale: angryOpacity.value },
        { translateY: (1 - angryOpacity.value) * 10 },
      ],
    };
  });

  const sadEmojiAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: sadOpacity.value,
      transform: [
        { scale: sadOpacity.value },
        { translateY: (1 - sadOpacity.value) * 10 },
      ],
    };
  });

  const happyEmojiAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: happyOpacity.value,
      transform: [
        { scale: happyOpacity.value },
        { translateY: (1 - happyOpacity.value) * 10 },
      ],
    };
  });

  // Main drag panResponder
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        setIsDragging(true);
        startYRef.current = gestureState.y0;
        initialSizeRef.current = circleSize.value;
      },
      onPanResponderMove: (evt, gestureState) => {
        if (!isDragging) return;

        const deltaY = startYRef.current - gestureState.moveY;
        const containerHeight = 200; // Approx container height

        // Calculate size change based on drag
        const sizeChange = (deltaY / containerHeight) * 362 * 1.8;
        const newSize = Math.max(
          68,
          Math.min(430, initialSizeRef.current + sizeChange)
        );

        // Calculate percentage
        const percentage = calculatePercentage(newSize);

        // Update values
        circleSize.value = newSize;
        runOnJS(setDragPercentage)(percentage);

        // Store last valid position
        lastValidPosition.current = {
          percentage: percentage,
          size: newSize,
        };

        // Update drag arrow position
        const centerX = windowWidth / 2;
        const centerY = 196; // Container height

        const x = evt.nativeEvent.locationX;
        const y = evt.nativeEvent.locationY;

        const angle = Math.atan2(y - centerY, x - centerX);

        dragArrowPosition.value = {
          top: centerY + (newSize / 2) * Math.sin(angle) - 16,
          left: centerX + (newSize / 2) * Math.cos(angle) - 16,
        };

        // Trigger vibration
        runOnJS(triggerVibration)("singlePulse");
      },
      onPanResponderRelease: () => {
        setIsDragging(false);

        // Apply final values with a spring effect
        circleSize.value = withSpring(lastValidPosition.current.size, {
          damping: 15,
          stiffness: 100,
        });
        runOnJS(setDragPercentage)(lastValidPosition.current.percentage);
      },
    })
  ).current;

  // Arrow drag panResponder
  const arrowPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        setIsArrowBeingDragged(true);
        arrowDragStartYRef.current = gestureState.y0;
        arrowInitialCircleSizeRef.current = circleSize.value;
      },
      onPanResponderMove: (evt, gestureState) => {
        if (!isArrowBeingDragged) return;

        // Calculate the change in position
        const deltaY = arrowDragStartYRef.current - gestureState.moveY;

        // Update circle size based on deltaY
        const sizeChange = deltaY * 2; // Adjust sensitivity
        const newSize = Math.max(
          68,
          Math.min(430, arrowInitialCircleSizeRef.current + sizeChange)
        );

        // Calculate percentage
        const percentage = calculatePercentage(newSize);

        // Update values
        circleSize.value = newSize;
        runOnJS(setDragPercentage)(percentage);

        // Update dragArrowPosition to stay at the edge of the circle
        const centerX = windowWidth / 2;
        const centerY = 196; // Container height

        const x = evt.nativeEvent.locationX;
        const y = evt.nativeEvent.locationY;

        const angle = Math.atan2(y - centerY, x - centerX);

        dragArrowPosition.value = {
          top: centerY + (newSize / 2) * Math.sin(angle) - 16,
          left: centerX + (newSize / 2) * Math.cos(angle) - 16,
        };
      },
      onPanResponderRelease: () => {
        setIsArrowBeingDragged(false);
      },
    })
  ).current;

  // Handle tap/click on container
  const handleContainerTap = (evt: any) => {
    console.log("handleContainerTap");
    const x = evt.nativeEvent.locationX;
    const y = evt.nativeEvent.locationY;

    const centerX = windowWidth / 2;
    const centerY = 196; // Container height

    // Calculate distance and angle
    const distance = Math.sqrt(
      Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
    );
    const angle = Math.atan2(y - centerY, x - centerX);

    // Set new size
    const maxSize = 430;
    const newSize = Math.min(Math.max(68, distance * 2), maxSize);
    const percentage = calculatePercentage(newSize);
    // Animate to new values
    circleSize.value = withSpring(newSize, {
      damping: 15,
      stiffness: 100,
    });
    setDragPercentage(percentage);

    // Update arrow position
    dragArrowPosition.value = {
      top: centerY + (newSize / 2) * Math.sin(angle) - 16,
      left: centerX + (newSize / 2) * Math.cos(angle) - 16,
    };

    triggerVibration("longPulse");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>How likely I am to return...</Text>
        <Text style={styles.percentageText}>{dragPercentage}%</Text>
      </View>

      <View
        // onPress={handleContainerTap}
        style={{
          width: Dimensions.get("window").width,
        }}
      >
        <View style={styles.circleContainer}>
          {/* Static circles */}
          <View style={styles.outerBoundaryCircle}></View>
          <View style={styles.mediumBoundaryCircle} />
          <View style={styles.innerBoundaryCircle}>
            <Text>Hello</Text>
          </View>

          {/* Emoji indicators */}

          <Animated.View style={[styles.sadEmoji]}>
            <BulbmojiSad width={25} height={25} />
          </Animated.View>
          <Animated.View style={[styles.angryEmoji]}>
            <BulbmojiAngry width={25} height={25} />
          </Animated.View>
          <Animated.View style={[styles.happyEmoji]}>
            <BulbmojiHappy width={25} height={25} />
          </Animated.View>
          {/* Drag arrow */}
          <Pressable onPress={handleContainerTap}>
            <Animated.View
              style={[
                styles.dragArrow,
                dragArrowAnimatedStyle,
              ]}
              {...arrowPanResponder.panHandlers}
            >
              <DragArrow />
            </Animated.View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  header: {
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
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
    height: 196,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
  },
  outerBoundaryCircle: {
    position: "absolute",
    width: 430,
    height: 430,
    borderRadius: 215,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(224, 224, 224, 0.5)",
    left: "50%",
    bottom: 0,
    transform: [{ translateX: -215 }, { translateY: 215 }],
  },
  mediumBoundaryCircle: {
    position: "absolute",
    width: 299,
    height: 299,
    borderRadius: 150,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(224, 224, 224, 0.5)",
    left: "50%",
    bottom: 0,
    transform: [{ translateX: -150 }, { translateY: 150 }],
    zIndex: 40,
  },
  innerBoundaryCircle: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(224, 224, 224, 0.5)",
    left: "50%",
    bottom: 0,
    transform: [{ translateX: -75 }, { translateY: 75 }],
    zIndex: 60,
  },
  mainCircle: {
    position: "absolute",
    backgroundColor: "#0052CC",
    borderRadius: 215,
    left: "50%",
    bottom: 0,
    zIndex: 300,
  },
  angryEmoji: {
    position: "absolute",
    bottom: 32,
    left: "46.9%",
    transform: [{ translateX: -12.5 }],
    zIndex: 600,
  },
  sadEmoji: {
    position: "absolute",
    top: 60,
    left: "41.5%",
    transform: [{ translateX: -12.5 }],
    zIndex: 400,
  },
  happyEmoji: {
    position: "absolute",
    top: 40,
    left: "49.75%",
    transform: [{ translateX: -12.5 }],
    zIndex: 500,
  },
  dragArrow: {
    position: "absolute",
    width: 33,
    height: 33,
    zIndex: 9999,
  },
});

export default SentimentWidget;
