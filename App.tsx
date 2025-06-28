/**
 * Node Modules
 */
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

/**
 * Custom Modules
 */
import MainNavigation from "./src/navigation/MainNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
