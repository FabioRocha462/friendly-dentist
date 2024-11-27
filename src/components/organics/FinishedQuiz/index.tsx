import { HeaderBack } from "@components/molecules/HeaderBack";
import { Container, TitleCongratulations, ViewGif } from "./styles";
import { useRoute } from "@react-navigation/native";
import { Image } from "expo-image";

interface RouteParams {
  points: number;
  totalQuestions: number;
}
export function FinishedQuiz() {
  const route = useRoute();
  const { points, totalQuestions } = route.params as RouteParams;

  const average = points / totalQuestions;
  return (
    <Container>
      <HeaderBack name="Parabéns" />
      <ViewGif>
        {average > 0.5 ? (
          <>
            <TitleCongratulations>{`Parabéns pelos ${points} de ${totalQuestions}`}</TitleCongratulations>
            <Image
              source={
                "https://media1.tenor.com/m/iKekUiIToocAAAAd/myhome-50lakhs.gif"
              }
              style={{ width: 200, height: 200 }}
            />
          </>
        ) : (
          <>
            <TitleCongratulations>{`Você pode fazer melhor ! ${points} de ${totalQuestions}`}</TitleCongratulations>
            <Image
              source={"https://media1.tenor.com/m/hylEE2LtVtcAAAAC/sad.gif"}
              style={{ width: 200, height: 200 }}
            />
          </>
        )}
      </ViewGif>
    </Container>
  );
}
