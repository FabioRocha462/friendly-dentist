import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { Dimensions } from "react-native";
import Animated, { SlideInDown } from "react-native-reanimated";
import { Container, Title, ViewImage } from "./styles";
import { NavigationGame } from "@screens/Games/data";

const widthCalc = Dimensions.get("screen").width * 0.33;
interface CardGameProps {
  title: string;
  image: string;
  navigation: NavigationGame;
}

export function CardGame({ image, title, navigation }: CardGameProps) {
  const navigate = useNavigation();
  const handlePress = () => {
    navigate.navigate(navigation);
  };
  return (
    <Animated.View entering={SlideInDown.duration(850)}>
      <Container
        activeOpacity={0.5}
        onPress={handlePress}
        style={{ opacity: navigation === "bear" ? 0.8 : 1 }}
        disabled={navigation === "bear"}
      >
        <ViewImage>
          <Image
            source={image}
            style={{ width: 120, height: 120 }}
            contentFit="contain"
          />
        </ViewImage>
        <Title numberOfLines={2}>{title}</Title>
      </Container>
    </Animated.View>
  );
}
