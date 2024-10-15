import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/index/Header";
import NextToCards from "@/components/index/NextToCards";

export default function Index() {
  return (
    <View style={styles.container}>
      <Header/>
      <NextToCards/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
