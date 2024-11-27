import { HeaderBack } from "@components/molecules/HeaderBack";
import {
  Button,
  Container,
  Hr,
  TitleButton,
  TitlePointes,
  ViewButton,
  ViewPoints,
} from "./styles";
import { useEffect, useState } from "react";
import { quizQuestions } from "./data";
import { CardQuiz } from "@components/molecules/CardQuiz";
import Animated, {
  Easing,
  interpolate,
  Keyframe,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { QuizOption, QuizQuestion } from "src/@types/quiz";
import { ProgressBar } from "@components/atoms/ProgressBar";
import { Dimensions } from "react-native";
import { useTheme } from "styled-components";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ANGLE = 10;
const TIME = 100;
const EASING = Easing.elastic(1.5);
const SCREEN_WIDTH = Dimensions.get("window").width - 32;
const CARD_SKIP_AREA = -200;
export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const theme = useTheme();
  const [points, setPoints] = useState(0);
  const [option, setOption] = useState<QuizOption | null>(null);
  const [quiz, setQuiz] = useState<QuizQuestion[]>([]);
  const rotation = useSharedValue<number>(0);
  const shake = useSharedValue<number>(0);
  const backgroundColor = useSharedValue(theme.colors.background);
  const CardPosition = useSharedValue(0);
  const navigation = useNavigation();

  const handleFinished = () => {
    navigation.navigate("finishedQuiz", {
      points: points,
      totalQuestions: quiz.length,
    });
  };
  const handleNextQuestion = () => {
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion((prevState) => prevState + 1);
      return;
    }
    handleFinished();
  };
  const oscillationAnimation = () => {
    rotation.value = withSequence(
      // deviate left to start from -ANGLE
      withTiming(-ANGLE, { duration: TIME / 2, easing: EASING }),
      // wobble between -ANGLE and ANGLE 7 times
      withRepeat(
        withTiming(ANGLE, {
          duration: TIME,
          easing: EASING,
        }),
        7,
        true
      ),
      // go back to 0 at the end
      withTiming(0, { duration: TIME / 2, easing: EASING })
    );
    setOption(null);
  };
  const shakeAnimation = async () => {
    shake.value = withSequence(
      withTiming(3, { duration: 400, easing: Easing.bounce }),
      withTiming(0, undefined, (finished) => {
        "worklet";
        if (finished) {
          runOnJS(handleNextQuestion)();
        }
      })
    );
    setOption(null);
  };
  const oscillatioStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotation.value}deg` }],
  }));
  const shakeStyleAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            shake.value,
            [0, 0.5, 1, 1.5, 2, 2.5, 3],
            [0, -15, 0, 15, 0, -15, 0]
          ),
        },
      ],
    };
  });
  const animatedBackGround = useAnimatedStyle(() => {
    return {
      backgroundColor: backgroundColor.value, // Aplica a cor animada
    };
  });
  const handleBackgroundChange = () => {
    let color = "";
    if (option?.isCorrect) {
      color = option.isCorrect
        ? theme.defaultTheme.addColors.freightDark
        : theme.defaultTheme.primary.medium;
    }

    // Altere para a cor desejada
    backgroundColor.value = withTiming(
      option?.isCorrect && option.isCorrect
        ? theme.defaultTheme.addColors.freightDark
        : theme.defaultTheme.primary.medium,
      { duration: 300 }
    );

    // Volte para a cor original após 1 segundo
    setTimeout(() => {
      backgroundColor.value = withTiming(theme.colors.background, {
        duration: 300,
      });
    }, 1000);
  };
  const handleConfirm = () => {
    if (!option?.option) {
      oscillationAnimation();
      return;
    }
    if (option.isCorrect) {
      setPoints((prevState) => prevState + 1);
      handleBackgroundChange();
      return setOption(null);
    } else {
      shakeAnimation();
      handleBackgroundChange();
    }
  };
  const enterinKeyframe = new Keyframe({
    0: {
      opacity: 0,
      transform: [{ translateX: SCREEN_WIDTH }, { rotate: "90deg" }],
    },
    70: {
      opacity: 0.3,
    },
    100: {
      opacity: 1,
      transform: [{ translateX: 0 }, { rotate: "0deg" }],
    },
  });

  const exitingKeyFrame = new Keyframe({
    from: {
      opacity: 1,
      transform: [{ translateX: 0 }, { rotate: "0deg" }],
    },
    to: {
      opacity: 0,
      transform: [{ translateX: -SCREEN_WIDTH }, { rotate: "-90deg" }],
    },
  });
  const onPan = Gesture.Pan()
    .onUpdate((event) => {
      const moveToLeft = event.translationX < 0;
      if (moveToLeft) {
        CardPosition.value = event.translationX;
      }
    })
    .onEnd((event) => {
      if (event.translationX < CARD_SKIP_AREA) {
        runOnJS(handleNextQuestion)();
      }
      CardPosition.value = withTiming(0);
    });

  const dragStyles = useAnimatedStyle(() => {
    const rotateZ = CardPosition.value / ANGLE;
    return {
      transform: [
        { translateX: CardPosition.value },
        { rotateZ: `${rotateZ}deg` },
      ],
    };
  });
  useEffect(() => {
    setTimeout(() => {
      setQuiz(quizQuestions);
    }, 500);
  });
  useEffect(() => {
    quiz.length > 0 && handleNextQuestion();
  }, [points]);

  return (
    <Animated.View style={[animatedBackGround]}>
      <Container>
        <HeaderBack name={"Quiz"} />
        <Hr />
        <ProgressBar
          total={quizQuestions.length - 1}
          current={currentQuestion}
        />
        <ViewPoints>
          <TitlePointes>{`${points}/${quiz.length}`}</TitlePointes>
        </ViewPoints>
        <Animated.ScrollView style={{ marginTop: 24 }}>
          <GestureDetector gesture={onPan}>
            <Animated.View
              style={[shakeStyleAnimated, oscillatioStyle, dragStyles]}
              entering={enterinKeyframe.duration(500)}
              exiting={exitingKeyFrame.duration(500).delay(400)}
              key={currentQuestion}
            >
              <Animated.View>
                <CardQuiz
                  question={quizQuestions[currentQuestion]}
                  setOption={setOption}
                />
              </Animated.View>
            </Animated.View>
          </GestureDetector>
        </Animated.ScrollView>
        <ViewButton>
          <Button isActive activeOpacity={0.5} onPress={handleConfirm}>
            <TitleButton>Confirmar Questão</TitleButton>
          </Button>
        </ViewButton>
      </Container>
    </Animated.View>
  );
}
