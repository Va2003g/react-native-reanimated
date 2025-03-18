import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BACKGROUND_COLOR, Stories } from "@/constants/constants";
import Story, {
  StoryListItemHeight,
  StoryListItemWidth,
} from "@/components/Story";

const Six = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={{ height: StoryListItemHeight, width: "100%" }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ width: StoryListItemWidth * Stories.length }}
        >
          {Stories.map((story, index) => (
            <Story key={index} imageSource={story.image} index={index} />
          ))}
        </ScrollView>
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
