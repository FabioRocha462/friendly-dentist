export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game: { nameScreen?: string };
      guide: { nameScreen?: string };
      video: { nameScreen?: string };
      simulation: { nameScreen?: string };
      quiz: undefined;
      dog: undefined;
      bear: undefined;
      finishedQuiz: { points: number; totalQuestions: number };
    }
  }
}
