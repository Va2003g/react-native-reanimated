import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
export const StoryListItemWidth = Dimensions.get("window").width * 0.8;
export const StoryListItemHeight = (StoryListItemWidth / 3) * 4;
import Animated from "react-native-reanimated";
interface StoryProps {
  imageSource: string;
  index: number;
}
const Story: React.FC<StoryProps> = ({ imageSource, index }) => {
  return (
    <Animated.View
      style={{
        zIndex: -index, //placing first image at the front.
        transform: [{ translateX: index * StoryListItemWidth }],
      }}
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
