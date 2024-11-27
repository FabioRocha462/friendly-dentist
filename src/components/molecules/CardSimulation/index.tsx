import { Simulation } from "src/@types/simulation";
import { Image } from "expo-image";
import { Container, Message, TextMessage } from "./styles";
import { TypeOption } from "@screens/Simulations/data";
import Animated, { SlideInDown } from "react-native-reanimated";
interface CardSimulationProps {
  simulation: Simulation;
  type: TypeOption;
}
export function CardSimulation({ simulation, type }: CardSimulationProps) {
  return (
    <Animated.View entering={SlideInDown.duration(850)}>
      <Container>
        <Image
          source={simulation.image}
          style={{ width: 38, height: 38, borderRadius: 999 }}
        />
        <Message type={type}>
          <TextMessage>{simulation.message}</TextMessage>
        </Message>
      </Container>
    </Animated.View>
  );
}
