import { GetStorage, SetStorage } from "@storage/index";
import { KEYTHEME } from "@utils/keys";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { Theme } from "src/@types/theme";

export type AuthContextDataProps = {
  theme: Theme;
  handleTheme: (theme: Theme) => void;
};
type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const handleTheme = async (newTheme: Theme) => {
    setTheme(newTheme);
    await SetStorage(KEYTHEME, newTheme);
  };
  const getThemeStorage = async () => {
    const themeStorage = await GetStorage(KEYTHEME);
    if (themeStorage !== null) {
      setTheme(themeStorage as Theme);
      return;
    }
    const themeSystem = useColorScheme();
    await SetStorage(KEYTHEME, themeSystem as Theme);
    setTheme(themeSystem as Theme);
  };
  useEffect(() => {
    getThemeStorage();
  }, []);
  return (
    <AuthContext.Provider value={{ theme, handleTheme }}>
      {children}
    </AuthContext.Provider>
  );
}
