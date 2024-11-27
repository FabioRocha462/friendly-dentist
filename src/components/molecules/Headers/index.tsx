import Sun from "@assets/icons/themeIcon.svg";
import { useAuth } from "@hooks/useAuth";
import { Image } from "expo-image";
import { TouchableOpacity, useColorScheme } from "react-native";
import { useTheme } from "styled-components";
import DefaultImage from "../../../assets/images/defaultImage.png";
import { Container, TitleWelcome, ViewImage } from "./styles";

export function Headers() {
  const themeUI = useTheme();
  const { theme, handleTheme } = useAuth();
  const colorScheme = useColorScheme();
  const handleToggleTheme = async () => {
    theme === "dark" ? handleTheme("light") : handleTheme("dark");
  };
  return (
    <Container>
      <ViewImage>
        <Image
          source={DefaultImage}
          style={{ width: 38, height: 38, borderRadius: 999 }}
        />
      </ViewImage>

      <TitleWelcome>Olá, Seja Bem vindo!</TitleWelcome>
      <TouchableOpacity activeOpacity={0.5} onPress={handleToggleTheme}>
        <Sun stroke={themeUI.colors.gray800} />
      </TouchableOpacity>
    </Container>
  );
}
