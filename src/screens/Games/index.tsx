import IconGame from "@assets/icons/game.svg";
import ImageGame from "@assets/images/game.png";
import { CardGame } from "@components/molecules/CardGame";
import { HeaderBack } from "@components/molecules/HeaderBack";
import { useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "styled-components";
import { GameOptions } from "./data";
import {
  Container,
  ContentCard,
  Hr,
  TitleHeader,
  ViewHeader,
  ViewImage,
} from "./styles";

interface RouteParams {
  nameScreen?: string;
}

export function Games() {
  const OFFSET = 40;
  const TIME = 250;
  const route = useRoute();
  const theme = useTheme();
  const offset = useSharedValue<number>(0);
  const { nameScreen } = route.params as RouteParams;
  const name = nameScreen ? nameScreen : "Aproveite";
  const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);
  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const handlePress = () => {
    offset.value = withSequence(
      // start from -OFFSET
      withTiming(-OFFSET, { duration: TIME / 2 }),
      // shake between -OFFSET and OFFSET 5 times
      withRepeat(withTiming(OFFSET, { duration: TIME }), 5, true),
      // go back to 0 at the end
      withTiming(0, { duration: TIME / 2 })
    );
  };
  useEffect(() => {
    handlePress();
  }, []);
  return (
    <Container>
      <HeaderBack name={name} />
      <Hr />
      <Animated.ScrollView>
        <ViewHeader>
          <IconGame
            fill={theme.defaultTheme.feedback.sucess.success500}
            width={24}
            height={24}
          />
          <TitleHeader>Divirta-se com os nossos jogos 🎮✨</TitleHeader>
        </ViewHeader>

        <ViewImage>
          <AnimatedButton onPress={handlePress} style={[style, { flex: 1 }]}>
            <Image
              source={ImageGame}
              style={{
                height: 150,
                width: 150,
                borderRadius: 12,
                borderColor: theme.defaultTheme.feedback.sucess.success500,
                borderWidth: 2,
              }}
            />
          </AnimatedButton>
        </ViewImage>

        <ContentCard>
          {GameOptions.map((game, index) => (
            <CardGame
              key={index}
              title={game.title}
              navigation={game.navigation}
              image={game.image}
            />
          ))}
        </ContentCard>
      </Animated.ScrollView>
    </Container>
  );
}
