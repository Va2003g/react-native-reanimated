import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";


export default function StackLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="One"
        options={{
          title: "Screen One",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Two"
        options={{
          title: "Screen Two",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
