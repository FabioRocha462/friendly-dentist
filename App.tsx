import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Routes } from "./src/routes/index";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthContextProvider } from "@contexts/AuthContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Bold: Roboto_700Bold,
    Regular: Roboto_400Regular,
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (fontsLoaded)
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
  }, [fontsLoaded]);
  return (
    <SafeAreaProvider>
      <AuthContextProvider>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color={"#008F25"}
            style={{ flex: 1, backgroundColor: "#000" }}
          />
        ) : (
          <GestureHandlerRootView>
            <Routes />
          </GestureHandlerRootView>
        )}
      </AuthContextProvider>
    </SafeAreaProvider>
  );
}
