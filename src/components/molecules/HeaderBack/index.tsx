import { BackButton } from "@components/atoms/BackButton";
import { Container, NamneScreen } from "./styles";
import { View } from "react-native";
interface HeaderBackProps {
  name: string;
}
export function HeaderBack({ name }: HeaderBackProps) {
  return (
    <Container>
      <BackButton />
      <NamneScreen>{name}</NamneScreen>
      <View />
    </Container>
  );
}
