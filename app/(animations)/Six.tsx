import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BACKGROUND_COLOR, Stories } from "@/constants/constants";
import Story, {
  StoryListItemHeight,
  StoryListItemWidth,
  WindowWidth,
} from "@/components/Story";
import Animated, { useAnimatedRef, useDerivedValue, useScrollViewOffset } from "react-native-reanimated";
const Six = () => {
  const animatedRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(animatedRef);
//   useDerivedValue(() => {
//     console.log(scrollOffset.value);
//   });
  const ListPadding = WindowWidth - StoryListItemWidth;
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={{ height: StoryListItemHeight, width: "100%" }}>
        <Animated.ScrollView
          horizontal={true}
          snapToInterval={StoryListItemWidth}
          decelerationRate="fast"
          disableIntervalMomentum={false}
          scrollEventThrottle={16} // 1/60fps = 16ms
          contentContainerStyle={{ width: StoryListItemWidth * Stories.length + ListPadding }}
          ref={animatedRef}
          showsHorizontalScrollIndicator={false}
        >
          {Stories.map((story, index) => (
            <Story key={index} imageSource={story.image} index={index} scrollX={scrollOffset} />
          ))}
        </Animated.ScrollView>
      </View>
    </View>
  );
};

export default Six;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
});
