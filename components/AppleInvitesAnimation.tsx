import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Marquee } from "@animatereactnative/marquee";
import {
  Easing,
  FadeIn,
  FadeInUp,
  FadeOut,
  interpolate,
  runOnJS,
  SharedValue,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { Stagger } from "@animatereactnative/stagger";
const images = [
  "https://w7.pngwing.com/pngs/573/1001/png-transparent-rick-sanchez-morty-smith-one-shot-art-rick-and-morty-manga-chibi-cartoon.png",
  "https://www.dolldivine.com/images/rick-and-morty-character-maker-app.png",
  "https://e1.pngegg.com/pngimages/541/998/png-clipart-rick-and-morty-hq-resource-rick-and-morty-character-illustration.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9iuI6nsNYz7OukbLD5UTYzJS6TxXkhf_SMAM58S-O9keDQfOhD52nBLXNczAhydTVxjg&usqp=CAU",
];

const { width } = Dimensions.get("window");
const _itemWidth = width * 0.62;
const _itemHeight = _itemWidth * 1.67;
const _spacing = 16;
const _itemSize = _itemWidth + _spacing;
function Item({
  image,
  index,
  offset,
}: {
  image: string;
  index: number;
  offset: SharedValue<number>;
}) {
  const _stylez = useAnimatedStyle(() => {
    const itemPosition = index * _itemSize - width - _itemSize / 2;
    const totalSize = images.length * _itemSize;

    const range =
      ((itemPosition - (offset.value + totalSize * 1000)) % totalSize) +
      width +
      _itemSize / 2;
    return {
      transform: [
        {
          rotate: `${interpolate(
            range,
            [-_itemSize, (width - _itemSize) / 2, width],
            [-3, 0, 3]
          )}deg`,
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[{ width: _itemWidth, height: _itemHeight }, _stylez]}
    >
      <Image
        source={{ uri: image }}
        style={{ flex: 1, borderRadius: 16 }}
        resizeMode="cover"
      />
    </Animated.View>
  );
}

const AppleInvitesAnimation = () => {
  const offset = useSharedValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  useAnimatedReaction(
    () => {
      const floatIndex =
        ((offset.value + width / 2) / _itemSize) % images.length;
      return Math.abs(Math.floor(floatIndex)); //caraousel is bidirectional so negative index is bothering when we move in reverse direction
    },
    (value) => {
      //calculate index and set state
      runOnJS(setActiveIndex)(value);
      //   setActiveIndex(value); app crashes
    }
  );
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            opacity: 0.5,
          },
        ]}
      >
        <Animated.Image
          style={{ flex: 1 }}
          source={{ uri: images[activeIndex] }}
          key={`image-${activeIndex}`}
          blurRadius={50}
          entering={FadeIn.duration(1000)} //1s
          exiting={FadeOut.duration(1000)}
        />
      </View>
      <Marquee spacing={_spacing} position={offset}>
        <Animated.View
          style={{ flexDirection: "row", gap: _spacing }}
          entering={FadeInUp.delay(500)
            .duration(1000)
            .easing(Easing.elastic(0.9))
            .withInitialValues({
              transform: [{ translateY: -_itemHeight / 2 }],
            })}
        >
          {images.map((image, index) => (
            <Item
              key={`image-${index}`}
              image={image}
              index={index}
              offset={offset}
            />
          ))}
        </Animated.View>
      </Marquee>

      <Stagger
        style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}
        stagger={500}
        duration={500}
        initialEnteringDelay={1000}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "500",
            opacity: 0.5,
          }}
        >
          Welcome to
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 28,
            fontWeight: "bold",
            marginBottom: 16,
          }}
        >
          AnimateReactNative.com
        </Text>
        <Text
          style={{
            color: "white",
            opacity: 0.8,
            textAlign: "center",
            paddingHorizontal: 20,
          }}
        >
          An extensive collection of more than 135+ react native animations
          meticulously crafted by the community.
        </Text>
      </Stagger>
    </View>
  );
};

export default AppleInvitesAnimation;
