import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
interface PageProps {
  index: number;
  title: string;
  scrollX: SharedValue<number>;
}

const { width, height } = Dimensions.get("window");
const SIZE = width * 0.7;

const Page: React.FC<PageProps> = ({ index, title, scrollX }) => {
  const reanimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0]
    );

    const borderRadius = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, SIZE / 2, 0]
    );
    return {
      transform: [{ scale }],
      borderRadius,
    };
  });

  const reanimatedTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [height / 2, 0, -height / 2]
    );

    const opacity = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [-2, 1, -2]
    );
    return {
      transform: [{ translateY }],
      opacity,
    };
  });

  return (
    <View
      style={[
        styles.item,
        { backgroundColor: `rgba(0,0,256,0.${index + 2})` },
      ]}
    >
      <Animated.View style={[styles.box, reanimatedStyle]} />
      <Animated.View style={[styles.textContainer, reanimatedTextStyle]}>
        <Text style={styles.title}>{title}</Text>
      </Animated.View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "rgba(0,0,256,0.4)",
  },
  textContainer: {
    position: "absolute",
  },
  title: {
    fontSize: 70,
    color: "white",
    fontWeight: "600",
  },
});
