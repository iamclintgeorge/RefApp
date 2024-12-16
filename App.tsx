import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./screens/home";

const Stack = createNativeStackNavigator();

function AppNavigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
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