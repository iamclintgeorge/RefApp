import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./screens/home";
import CatechismScreen from "./screens/catechismScreen";
import CreedScreen from "./screens/creedScreen";
import ConfessionScreen from "./screens/confessionScreen";

const Stack = createNativeStackNavigator();

function AppNavigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
        <Stack.Screen
    options={{ headerShown: false }}
    name="CatechismScreen"
    component={CatechismScreen}
  />
      <Stack.Screen
        options={{ headerShown: false }}
        name="CreedScreen"
        component={CreedScreen}
      />
            <Stack.Screen
        options={{ headerShown: false }}
        name="ConfessionScreen"
        component={ConfessionScreen}
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