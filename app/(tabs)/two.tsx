import { Text, View } from "react-native";
import AppleInvitesAnimation from "@/components/AppleInvitesAnimation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Link } from "expo-router";
import BulbmojiAngry from "@/components/BulbmojiAngry";
import BulbmojiAnnoyed from "@/components/BulbmojiAnnoyed";
import BulbmojiHappy from "@/components/BulbmojiHappy";
import BulbmojiSad from "@/components/BulbmojiSad";

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
      <Link href="/(animations)/Three" asChild>
        <Text>
          Go to Pie Animation
        </Text>
      </Link>
      <Link href="/(animations)/Four" asChild>
        <Text>
          Go to Pan Gesture
        </Text>
      </Link>
      <Link href="/(animations)/Five" asChild>
        <Text>
          Go to Scroll Animation
        </Text>
      </Link>
      <Link href="/(animations)/Six" asChild>
        <Text>
          Go to Carousel Animation
        </Text>
      </Link>
      <Link href="/(animations)/Cents" asChild>
        <Text>
          Go to Cents Animation
        </Text>
      </Link>

      {/* <BulbmojiAngry width={258} height={258} />
      <BulbmojiAnnoyed width={258} height={258} />
      <BulbmojiHappy width={258} height={258} />
      <BulbmojiSad width={258} height={258} /> */}
    </View>
  );
}
