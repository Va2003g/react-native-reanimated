import { Easing, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  withRepeat,
  FadeIn,
  ZoomIn,
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
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
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
        <Animated.View
          style={[
            {
              width: 400,
              height: 400,
              borderRadius: 1000,
              position: "absolute",
              zIndex: 10,
              transform: [{ rotate: "22.5deg" }],
            },
            animatedStyle,
          ]}
          key={value.value}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <View
              style={{
                transform: [{ rotate: `${item * 45 + 22.5}deg` }],
                width: 400,
                height: 400,
                borderRadius: 1000,
                position: "absolute",
              }}
              key={item}
            >
              <Text
                key={item}
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                {item}
              </Text>
            </View>
          ))}
        </Animated.View>
        <Pressable
          onPress={() => {
            // console.log(
            //   "Math.floor(Math.random() * 360)",
            //   Math.floor(Math.random() * 360)
            // );
            value.value = withTiming(
              value.value +
                Math.floor(Math.random() * 360) *
                  Math.floor(Math.random() * 10),
              {
                duration: 3000,
              }
            );
          }}
          style={{
            width: 70,
            height: 70,
            backgroundColor: "blue",
            borderRadius: 1000,
            position: "absolute",
            zIndex: 100,
          }}
        />
      </View>
    </View>
  );
};

export default CircleAnimation;

const styles = StyleSheet.create({});
