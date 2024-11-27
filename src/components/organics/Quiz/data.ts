import { QuizQuestion } from "src/@types/quiz";

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Quantas vezes por dia é recomendado escovar os dentes?",
    options: [
      { option: "Uma vez", isCorrect: false },
      { option: "Duas vezes", isCorrect: true },
      { option: "Quatro vezes", isCorrect: false },
    ],
  },
  {
    question: "Qual é o tempo ideal para escovar os dentes?",
    options: [
      { option: "30 segundos", isCorrect: false },
      { option: "1 minuto", isCorrect: false },
      { option: "2 minutos", isCorrect: true },
    ],
  },
  {
    question:
      "O que pode acontecer se você não escovar os dentes regularmente?",
    options: [
      { option: "Formação de cáries", isCorrect: true },
      { option: "Seus dentes ficam mais brancos", isCorrect: false },
      { option: "Nada acontece", isCorrect: false },
    ],
  },
  {
    question: "Qual destes alimentos é bom para a saúde dos dentes?",
    options: [
      { option: "Balas e chicletes", isCorrect: false },
      { option: "Maçãs", isCorrect: true },
      { option: "Refrigerantes", isCorrect: false },
    ],
  },
  {
    question: "O que o fio dental faz?",
    options: [
      { option: "Limpa entre os dentes", isCorrect: true },
      { option: "Deixa os dentes mais brancos", isCorrect: false },
      { option: "Substitui a escovação", isCorrect: false },
    ],
  },
  {
    question: "Por que visitar o dentista regularmente é importante?",
    options: [
      { option: "Para evitar cáries e problemas dentários", isCorrect: true },
      {
        option: "Para brincar com as ferramentas do dentista",
        isCorrect: false,
      },
      { option: "Não é importante", isCorrect: false },
    ],
  },
  {
    question: "Qual destes é o melhor horário para escovar os dentes?",
    options: [
      { option: "Antes de dormir", isCorrect: true },
      { option: "Depois do almoço", isCorrect: true },
      { option: "Apenas de manhã", isCorrect: false },
    ],
  },
  {
    question: "O que é placa bacteriana?",
    options: [
      { option: "Uma camada de sujeira nos dentes", isCorrect: false },
      {
        option: "Uma camada de bactérias que pode causar cáries",
        isCorrect: true,
      },
      { option: "Uma ferramenta usada pelo dentista", isCorrect: false },
    ],
  },
  {
    question: "É necessário trocar a escova de dentes regularmente?",
    options: [
      { option: "Sim, a cada 3 meses", isCorrect: true },
      { option: "Não, só quando quebrar", isCorrect: false },
      { option: "Não, pode usar para sempre", isCorrect: false },
    ],
  },
  {
    question: "Qual é a função do creme dental com flúor?",
    options: [
      { option: "Fortalecer os dentes e prevenir cáries", isCorrect: true },
      { option: "Fazer os dentes brilharem", isCorrect: false },
      { option: "Deixar os dentes moles", isCorrect: false },
    ],
  },
];
