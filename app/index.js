import React from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import getTheme from "../assets/styles/themes"; // Importe a função getTheme corretamente

export default function IndexScreen() {
  const scheme = useColorScheme(); // Detecta se o tema está em dark mode
  const isDarkMode = scheme === "dark";

  // Certifique-se de que `getTheme` retorna um objeto válido
  const theme = getTheme ? getTheme(isDarkMode) : { backgroundColor: "#fff", textColor: "#000" };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.text, { color: theme.textColor }]}>
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});
