import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "@/Routes";
import "@/theme/global";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
