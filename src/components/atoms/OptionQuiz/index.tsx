import { QuizOption, QuizQuestion } from "src/@types/quiz";
import { Container, Title } from "./styles";
import Animated, { SlideInRight } from "react-native-reanimated";
import { SetStateAction } from "react";
interface OptionQuizProps {
  option: QuizOption;
  isSelected?: boolean;
  setSelectedOption: (c: SetStateAction<QuizOption>) => void;
}
export function OptionQuiz({
  option,
  isSelected,
  setSelectedOption,
}: OptionQuizProps) {
  return (
    <Animated.View entering={SlideInRight.duration(500).delay(250)}>
      <Container
        isSelected={isSelected}
        activeOpacity={0.5}
        onPress={() => setSelectedOption(option)}
      >
        <Title isSelected={isSelected}>{option.option}</Title>
      </Container>
    </Animated.View>
  );
}
