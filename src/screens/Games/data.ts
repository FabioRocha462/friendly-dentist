import Quiz from "@assets/images/Quiz.png";
import Dog from "@assets/images/dog.png";
import Bear from "@assets/images/bear-young.png";
export type NavigationGame = "quiz" | "dog" | "bear";
interface GameOption {
  title: string;
  image: string;
  navigation: NavigationGame;
}

export const GameOptions: GameOption[] = [
  {
    title: "Quiz",
    image: Quiz,
    navigation: "quiz",
  },
  {
    title: "Ajude o Nino a escovar seus dentes ",
    image: Dog,
    navigation: "dog",
  },
  {
    title: "(EM BREVE)",
    image: Bear,
    navigation: "bear",
  },
];
