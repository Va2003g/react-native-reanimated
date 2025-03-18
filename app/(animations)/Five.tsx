import Page from "@/components/Page";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

const WORDS = ["Hello", "React", "Native", "Mobile", "Devs!!"];
export default function Five() {
  const scrollX = useSharedValue(0);
  const handleScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      scrollX.value = contentOffset.x;
    },
  });
  return (
    <View style={styles.container}>
      <Animated.ScrollView
        style={{ flex: 1 }}
        scrollEventThrottle={16} //for hanlding fps
        horizontal
        onScroll={handleScroll}
        pagingEnabled
      >
        {WORDS.map((word, index) => (
          <Page key={index} index={index} title={word} scrollX={scrollX} />
        ))}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
