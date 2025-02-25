import React, { useEffect } from "react";
import { StatusBar, StyleSheet, Text, View, useColorScheme } from "react-native";
import getTheme from "../assets/styles/themes"; // Importe a função getTheme

export default function Index() {
  // Detecta o esquema de cores atual (modo claro ou escuro)
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark"; // Se o esquema for 'dark', isDarkMode será true

  // Obtenha as cores baseadas no modo atual
  const theme = getTheme(isDarkMode);


  useEffect(() => {
    StatusBar.setHidden(true); // Esconde a barra de status
    return () => {
      StatusBar.setHidden(false); // Restaura a barra de status quando o componente for desmontado
    };
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={{ color: theme.textColor }}>
        Edit app/index.tsx to edit this screen.
      </Text>
      <Text style={{ color: theme.subtextColor }}>
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}

// Estilos básicos do container (sempre aplicados, independentemente do modo)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
