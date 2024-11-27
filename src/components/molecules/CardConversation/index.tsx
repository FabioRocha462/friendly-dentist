import DentistImage from "@assets/images/defaultImage.png";
import ChildImage from "@assets/images/sofia.png";
import { Image } from "expo-image";
import Animated, {
  runOnJS,
  SlideInDown,
  SlideInRight,
} from "react-native-reanimated";
import { Conversation } from "src/@types/conversation";
import { Container, Message, Name, ViewImageName } from "./styles";
export type Persona = "dentist" | "child";
interface CardConversationProps {
  conversation: Conversation;
  persona: Persona;
}
export function CardConversation({
  conversation,
  persona,
}: CardConversationProps) {
  const image = persona === "dentist" ? DentistImage : ChildImage;

  return (
    <Animated.View entering={SlideInDown.duration(500)}>
      <Container persona={persona}>
        <ViewImageName>
          <Image
            source={image}
            style={{ width: 38, height: 38, borderRadius: 999 }}
          />
          <Name>{conversation.name}</Name>
        </ViewImageName>
        <Message>{conversation.message}</Message>
      </Container>
    </Animated.View>
  );
}
