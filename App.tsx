// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CatechismScreen from "./screens/catechismScreen";
import CreedScreen from "./screens/creedScreen";
import ConfessionScreen from "./screens/confessionScreen";
import Home from "./screens/home";

// Define RootStackParamList type for all screens
export type RootStackParamList = {
  Home: undefined;
  CatechismScreen: { itemName: string }; // Define the param for this screen
  CreedScreen: { itemName: string }; // Define the param for this screen
  ConfessionScreen: { itemName: string }; // Define the param for this screen
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CatechismScreen"
          component={CatechismScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreedScreen"
          component={CreedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConfessionScreen"
          component={ConfessionScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
  );
}
