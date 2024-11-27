import BrushImage from "@assets/images/Escova.png";
import DogImage from "@assets/images/pet-removebg-preview.png";
import { HeaderBack } from "@components/molecules/HeaderBack";
import { Image } from "expo-image";
import { useRef, useState } from "react";
import { findNodeHandle, UIManager, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Container } from "./styles";
import { ProgressBar } from "@components/atoms/ProgressBar";
import { useNavigation } from "@react-navigation/native";
interface Area {
  x: number;
  y: number;
  width: number;
  height: number;
}
const BRUSHIMAGE_SIZE = 100;
export function Dog() {
  const prevTranslationX = useSharedValue<number>(0);
  const prevTranslationY = useSharedValue<number>(0);
  const [points, setPoints] = useState(0);
  const refView = useRef<View>(null);
  const [area, setArea] = useState<Area>({} as Area);
  const navigate = useNavigation();
  const getMouthArea = () => {
    if (refView.current) {
      refView.current?.measureInWindow((x, y, width, height) => {
        setArea({
          x,
          y,
          width,
          height,
        });
      });
    }
  };
  const navigateToScreen = () => {
    navigate.navigate("finishedQuiz", { totalQuestions: 100, points: points });
  };
  const onPan = Gesture.Pan()
    .onStart((event) => {
      prevTranslationX.value = event.translationX;
      prevTranslationY.value = event.translationY;
    })
    .onChange((event) => {
      prevTranslationX.value = event.translationX;
      prevTranslationY.value = event.translationY;

      const brushX = event.absoluteX; // Posição horizontal da escova
      const brushY = event.absoluteY; // Posição vertical da escova
      const isMouth =
        brushX >= area.x &&
        brushX <= area.x + area.width &&
        brushY >= area.y &&
        brushY <= area.y + area.height;

      if (isMouth) {
        runOnJS(setPoints)(Math.min(points + 1, 100));
      }
    })
    .onEnd(() => {
      points === 100 && runOnJS(navigateToScreen)();
    });

  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: prevTranslationX.value },
        { translateY: prevTranslationY.value },
      ],
    };
  });
  return (
    <Container>
      <HeaderBack name="Escovar os dentes" />
      <View
        style={{
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 12,
        }}
      >
        <ProgressBar current={points} total={100} />
      </View>
      <Animated.ScrollView>
        <Image
          source={DogImage}
          style={{
            height: 500,
            width: 500,
            alignSelf: "center",
          }}
        />
        <View
          style={{
            position: "absolute",
            width: 70,
            height: 50,
            top: "45%",
            left: "40%",
          }}
          ref={refView}
          onLayout={getMouthArea}
        />
        <GestureDetector gesture={onPan}>
          <Animated.View
            style={[{ position: "absolute", bottom: 0 }, imageStyle]}
          >
            <Image
              source={BrushImage}
              style={{
                height: BRUSHIMAGE_SIZE,
                width: BRUSHIMAGE_SIZE,
                alignSelf: "center",
              }}
              contentFit="contain"
            />
          </Animated.View>
        </GestureDetector>
      </Animated.ScrollView>
    </Container>
  );
}
