import { useNavigation } from "@react-navigation/native";
import { Container, Title, ViewImage } from "./styles";
import { Image } from "expo-image";

type navigation = "game" | "video" | "simulation" | "guide";
interface CardOptionsProps {
  image: string;
  name: string;
  navigation: navigation;
}

export function CardOptions({ image, name, navigation }: CardOptionsProps) {
  const navigateRoot = useNavigation();
  const handleNavigate = (route: navigation) => {
    navigateRoot.navigate(route, { nameScreen: name });
  };
  return (
    <Container activeOpacity={0.5} onPress={() => handleNavigate(navigation)}>
      <ViewImage>
        <Image
          source={image}
          style={{ width: "100%", height: "100%" }}
          contentFit="contain"
        />
      </ViewImage>
      <Title numberOfLines={1}>{name}</Title>
    </Container>
  );
}
