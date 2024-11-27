interface dataProps {
  name: string;
  image: string;
  navigation: "game" | "video" | "simulation" | "guide";
}

import ImageVideo from "@assets/images/BoyVideo (1).png";
import ImageGuia from "@assets/images/BoyWithDentist.png";
import ImageGame from "@assets/images/BoyVideoGame.png";
import ImageSimulation from "@assets/images/Boy.png";

export const arrayInformations: dataProps[] = [
  {
    name: "Video",
    image: ImageVideo,
    navigation: "video",
  },
  {
    name: "Jogos",
    image: ImageGame,
    navigation: "game",
  },
  {
    name: "Guias",
    image: ImageGuia,
    navigation: "guide",
  },
  {
    name: "Simulações",
    image: ImageSimulation,
    navigation: "simulation",
  },
];
