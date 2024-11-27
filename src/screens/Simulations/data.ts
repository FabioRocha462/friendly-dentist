import ImageTooth from "@assets/images/Escovando.png";
import ImageWire from "@assets/images/fiodental.png";

import { Simulation } from "src/@types/simulation";
export type TypeOption = "wire" | "tooth";
interface OptionSimulateProps {
  title: string;
  image: string;
  type: TypeOption;
}

export const OptionSimulate: OptionSimulateProps[] = [
  {
    title: "Aprenda a escovar os seus dentes 🦷",
    image: ImageTooth,
    type: "tooth",
  },
  {
    title: "Aprenda a passar o fio dental em seus dentes 🦷",
    image: ImageWire,
    type: "wire",
  },
];

export const toothBrushingSimulation: Simulation[] = [
  {
    image: ImageTooth,
    name: "Sofia",
    message:
      "Oi! Eu sou a Sofia e vou te ensinar a escovar os dentes de forma divertida!",
  },
  {
    image: ImageTooth,
    name: "Sofia",
    message:
      "Primeiro, pegue sua escova de dentes e coloque um pouco de pasta, do tamanho de uma ervilha.",
  },
  {
    image: ImageTooth,
    name: "Sofia",
    message:
      "Agora, escove os dentes de cima com movimentos suaves e circulares.",
  },
  {
    image: ImageTooth,
    name: "Sofia",
    message:
      "Depois, faça o mesmo nos dentes de baixo. Cuide de todos os cantinhos!",
  },
  {
    image: ImageTooth,
    name: "Sofia",
    message: "Não esqueça da língua! Escove ela devagar, de trás para frente.",
  },
  {
    image: ImageTooth,
    name: "Sofia",
    message: "Por último, enxágue a boca com água e veja como ficou limpinha!",
  },
  {
    image: ImageTooth,
    name: "Sofia",
    message: "Muito bem! Agora seus dentes estão brilhando como estrelas!",
  },
];
export const flossingSimulation: Simulation[] = [
  {
    image: ImageWire,
    name: "Sofia",
    message:
      "Oi! Sou a Sofia, e vou te mostrar como usar o fio dental direitinho!",
  },
  {
    image: ImageWire,
    name: "Sofia",
    message:
      "Primeiro, pegue um pedaço de fio dental. Ele deve ter cerca de 40 cm de comprimento.",
  },
  {
    image: ImageWire,
    name: "Sofia",
    message:
      "Enrole as pontas do fio em seus dedos médios, deixando um pedaço livre no meio.",
  },
  {
    image: ImageWire,
    name: "Sofia",
    message:
      "Segure o fio firme e deslize suavemente entre os dentes, fazendo um movimento de C ao redor de cada um.",
  },
  {
    image: ImageWire,
    name: "Sofia",
    message:
      "Leve o fio até a linha da gengiva, mas com cuidado para não machucar!",
  },
  {
    image: ImageWire,
    name: "Sofia",
    message:
      "Use partes limpas do fio para cada dente e descarte o fio usado ao terminar.",
  },
  {
    image: ImageWire,
    name: "Sofia",
    message:
      "Prontinho! Agora seus dentes estão ainda mais limpos e saudáveis!",
  },
];
