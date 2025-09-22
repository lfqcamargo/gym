import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppLayout } from "./layouts/AppLayout";
import { Home } from "./screens/Home";
import { Teste } from "./screens/Teste";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <AppLayout>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="teste" component={Teste} />
      </Stack.Navigator>
    </AppLayout>
  );
}
