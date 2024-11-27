import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
import AppRoutes from "./app.routes";
import { useAuth } from "@hooks/useAuth";
import { themeDark, themeLight } from "@theme/index";
import { useEffect, useState } from "react";

export function Routes() {
  const { theme } = useAuth();
  const [themeSelected, setThemeSelected] = useState(themeLight);
  useEffect(() => {
    setThemeSelected(theme === "dark" ? themeDark : themeLight);
  }, [theme]);
  return (
    <NavigationContainer>
      <ThemeProvider theme={themeSelected}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppRoutes />
        </SafeAreaView>
      </ThemeProvider>
    </NavigationContainer>
  );
}
