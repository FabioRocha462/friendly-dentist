import { useTheme } from "styled-components/native";
import { Container, ViewBack } from "./styles";
import BackIcon from "@assets/icons/BackIcon.svg";
import { useNavigation } from "@react-navigation/native";
export function BackButton() {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.goBack()}>
      <ViewBack>
        <BackIcon stroke={theme.colors.gray800} width={18} height={18} />
      </ViewBack>
    </Container>
  );
}
