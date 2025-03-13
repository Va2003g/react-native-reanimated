import { Text, View } from "react-native";
import AppleInvitesAnimation from "@/components/AppleInvitesAnimation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Link } from "expo-router";

export default function TabTwoScreen() {  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="/(animations)/One" asChild>
        <Text>
          Go to Apple Animation
        </Text>
      </Link>
      <Link href="/(animations)/Two" asChild>
        <Text>
          Go to Circle Animation
        </Text>
      </Link>
    </View>
  );
}
