import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
interface StoryProps {
  imageSource: string;
  index: number;
  scrollX: SharedValue<number>;
}

export const StoryListItemWidth = Dimensions.get("window").width * 0.8;
export const StoryListItemHeight = (StoryListItemWidth / 3) * 4;
export const WindowWidth = Dimensions.get("window").width;
const Story: React.FC<StoryProps> = ({ imageSource, index, scrollX }) => {
  const rContainerStyle = useAnimatedStyle(() => {
    const activeIndex = scrollX.value / StoryListItemWidth;

    const paddingLeft = (WindowWidth - StoryListItemWidth) / 4;
    const translateX = interpolate(
      activeIndex,
      [index - 2, index - 1, index, index + 1],
      [120, 60, 0, -StoryListItemWidth - paddingLeft * 2],
      Extrapolation.CLAMP
    );

    const scale = interpolate(
      activeIndex,
      [index - 2, index - 1, index, index + 1],
      [0.8, 0.9, 1, 1],
      Extrapolation.CLAMP
    );
    return {
      transform: [{ translateX: scrollX.value + translateX }, { scale }],
      left: paddingLeft,
    };
  });
  return (
    <Animated.View
      style={[
        {
          zIndex: -index, //placing first image at the front.
        },
        rContainerStyle,
      ]}
    >
      <Image
        source={imageSource}
        style={{
          width: StoryListItemWidth,
          height: StoryListItemHeight,
          borderRadius: 25,
          position: "absolute",
        }}
      />
    </Animated.View>
  );
};

export default Story;

const styles = StyleSheet.create({});
