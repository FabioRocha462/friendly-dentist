import { SetStateAction } from "react";
import { Button, Container, Title } from "./styles";
export type TittleButton = "Option 1" | "Option 2";
export interface OptionsGuideProps {
  title: TittleButton;
  setTitle: (c: SetStateAction<TittleButton>) => void;
}
export function OptionsGuide({ title, setTitle }: OptionsGuideProps) {
  return (
    <Container>
      <Button
        activeOpacity={0.5}
        isActive={title === "Option 1"}
        onPress={() => setTitle("Option 1")}
      >
        <Title>Opção 1</Title>
      </Button>
      <Button
        activeOpacity={0.5}
        isActive={title === "Option 2"}
        onPress={() => setTitle("Option 2")}
      >
        <Title>Opção 2</Title>
      </Button>
    </Container>
  );
}
