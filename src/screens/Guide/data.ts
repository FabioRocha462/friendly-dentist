import { Persona } from "@components/molecules/CardConversation";

export interface ConversationProps {
  persona: Persona;
  name: string;
  message: string;
}

export const conversation1: ConversationProps[] = [
  {
    persona: "dentist",
    name: "Dr. Felipe Sorriso",
    message: "Oi, tudo bem? Como você está cuidando dos seus dentinhos?",
  },
  {
    persona: "child",
    name: "Sofia Curiosa",
    message:
      "Oi, Dr. Felipe! Acho que estão bem... mas às vezes esqueço de escovar antes de dormir. Isso faz mal?",
  },
  {
    persona: "dentist",
    name: "Dr. Felipe Sorriso",
    message:
      "Faz sim, Sofia. À noite, os germes ficam mais ativos porque a boca fica com menos saliva. Que tal criar um hábito divertido para lembrar?",
  },
  {
    persona: "child",
    name: "Sofia Curiosa",
    message: "Boa ideia! E o fio dental? Ele é meio chatinho...",
  },
  {
    persona: "dentist",
    name: "Dr. Felipe Sorriso",
    message:
      " Ele é importante para tirar sujeiras escondidas. Pense nele como um ajudante ninja dos seus dentes!",
  },
  {
    persona: "child",
    name: "Sofia Curiosa",
    message: "Haha! Vou usar mais!",
  },
];

export const conversation2: ConversationProps[] = [
  {
    persona: "dentist",
    name: "Dr. Felipe Sorriso",
    message: "Oi, Sofia! Hoje você trouxe alguma dúvida sobre seus dentinhos?",
  },
  {
    persona: "child",
    name: "Sofia Curiosa",
    message:
      "Oi, Dr. Felipe! Eu queria saber: por que preciso trocar a escova de dente depois de um tempo?",
  },
  {
    persona: "dentist",
    name: "Dr. Felipe Sorriso",
    message:
      "Boa pergunta! As cerdas ficam desgastadas e não limpam tão bem. Além disso, é importante trocar para evitar germes.",
  },
  {
    persona: "child",
    name: "Sofia Curiosa",
    message: "Ah, entendi! E posso usar a escova elétrica? Parece tão legal!",
  },
  {
    persona: "dentist",
    name: "Dr. Felipe Sorriso",
    message:
      "Claro, Sofia! Mas lembre-se de escovar por dois minutos e alcançar todos os cantinhos da boca, tá bom?",
  },
  {
    persona: "child",
    name: "Sofia Curiosa",
    message: "Tá bom, Dr. Felipe! Vou cuidar direitinho. Obrigada!",
  },
];
