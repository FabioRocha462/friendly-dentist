import { Image } from "expo-image";
import { Container, Title } from "./styles";
interface CardOptionsSimulationProps {
  title: string;
  image: string;
}
export function CardOptionsSimulation({
  title,
  image,
}: CardOptionsSimulationProps) {
  return (
    <Container>
      <Image
        source={image}
        style={{ width: 150, height: 150 }}
        contentFit="contain"
      />
      <Title>{title}</Title>
    </Container>
  );
}
