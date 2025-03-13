import { Easing, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  withRepeat,
} from "react-native-reanimated";
const CircleAnimation = () => {
  const value = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: withTiming(`${value.value}deg`, { duration: 100 }) },
      ],
    };
  });
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 20 }}>
        Circle Animations
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <Animated.View
          style={[
            {
              width: 400,
              height: 400,
              backgroundColor: "red",
              borderRadius: 1000,
              justifyContent: "center",
              alignItems: "center",
            },
            animatedStyle,
          ]}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "white",
              width: "100%",
              height: 2,
            }}
          />
          <View
            style={{
              borderWidth: 1,
              borderColor: "white",
              width: 2,
              height: "100%",
              position: "absolute",
              left: "50%",
            }}
          />
          <View
            style={{
              borderWidth: 1,
              borderColor: "white",
              width: "100%",
              height: 2,
              position: "absolute",
              top: "50%",
              transform: [{ rotate: "45deg" }],
            }}
          />
          <View
            style={{
              borderWidth: 1,
              borderColor: "white",
              width: 2,
              height: "100%",
              position: "absolute",
              right: "50%",
              transform: [{ rotate: "45deg" }],
            }}
          />
        </Animated.View>
        <Pressable
          onPress={() => {
            value.value = withTiming(
              +value.value + Math.floor(Math.random() * 3600),
              {
                duration: 2000,
              }
            );
          }}
          style={{
            width: 70,
            height: 70,
            backgroundColor: "blue",
            borderRadius: 1000,
            position: "absolute",
          }}
        />
      </View>
    </View>
  );
};

export default CircleAnimation;

const styles = StyleSheet.create({});
