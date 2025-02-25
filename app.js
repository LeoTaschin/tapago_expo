import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import IndexScreen from "./app/index"; // Certifique-se de que o caminho está correto

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="welcome" component={IndexScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
