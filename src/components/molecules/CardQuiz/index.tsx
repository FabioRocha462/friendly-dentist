import Animated, { Keyframe } from "react-native-reanimated";
import { Container, Hr, Title, ViewHeader, ViewOptions } from "./styles";
import { QuizOption, QuizQuestion } from "src/@types/quiz";
import { OptionQuiz } from "@components/atoms/OptionQuiz";
import { SetStateAction, useEffect, useState } from "react";

interface CardQuizProps {
  question: QuizQuestion;
  setOption: (c: SetStateAction<QuizOption | null>) => void;
}
export function CardQuiz({ question, setOption }: CardQuizProps) {
  const [oiptionSelected, setOpionSelected] = useState<QuizOption>(
    {} as QuizOption
  );

  useEffect(() => {
    setOption(oiptionSelected);
  }, [oiptionSelected]);
  return (
    <Container>
      <ViewHeader>
        <Title>{question.question}</Title>
      </ViewHeader>
      <Hr />
      <ViewOptions>
        {question.options &&
          question.options.map((option, index) => (
            <OptionQuiz
              key={index}
              option={option}
              setSelectedOption={setOpionSelected}
              isSelected={oiptionSelected.option === option.option}
            />
          ))}
      </ViewOptions>
    </Container>
  );
}
