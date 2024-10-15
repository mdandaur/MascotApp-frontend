import Camera from "@/components/camera/Camera";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function CameraPage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/camera.tsx to edit this screen.</Text>
      <Camera />
      <Link href={"/"}>
        <Text>Go to Index</Text>
      </Link>
    </View>
  );
}