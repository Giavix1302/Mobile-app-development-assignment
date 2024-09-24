import Home from "./components/screen/Home";
import ChangeColor from "./components/screen/ChangeColor";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ChangeColor" component={ChangeColor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
