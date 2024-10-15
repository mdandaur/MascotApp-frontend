import React from "react";
import { Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { ThemedView } from "@/components/ThemedView";

export default function Header() {
    return (
        <ThemedView lightColor="white" darkColor="purple" style={styles.header} >
        <Text>Ir a la cámara para reportar una mascota perdida</Text>
        <Link href={"/camera"} style={styles.cameraButton}>
          <Text>Ir</Text>
        </Link>
      </ThemedView>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        padding: 20,
        fontSize: 20,
        fontWeight: "bold",
        gap: 10,
    },
    cameraButton: {
        backgroundColor: "black",
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: "white",
        borderRadius: 5,
    },
});