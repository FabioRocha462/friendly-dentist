import IconFlag from "@assets/icons/IconFlag.svg";
import IconStart from "@assets/icons/VectorTriangle.svg";
import { CardOptionsSimulation } from "@components/molecules/CardOptionSimulation";
import { CardSimulation } from "@components/molecules/CardSimulation";
import { HeaderBack } from "@components/molecules/HeaderBack";
import { useRoute } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Animated, { SlideInDown } from "react-native-reanimated";
import { Simulation } from "src/@types/simulation";
import { useTheme } from "styled-components";
import {
  OptionSimulate,
  TypeOption,
  flossingSimulation,
  toothBrushingSimulation,
} from "./data";
import {
  ButtonStart,
  Container,
  ContentCard,
  Hr,
  TitleButton,
  TitleHeader,
  ViewExplication,
} from "./styled";
interface RouteParams {
  nameScreen?: string;
}
export function Simulations() {
  const route = useRoute();
  const theme = useTheme();
  const { nameScreen } = route.params as RouteParams;
  const refSroll = useRef<Animated.ScrollView>(null);
  const [simulation, setSimulation] = useState<Simulation[]>([]);
  const [options, setOptions] = useState<TypeOption>("tooth");
  const [index, setIndex] = useState(0);
  const name = nameScreen ? nameScreen : "Aproveite";

  const TypeArray: Record<TypeOption, Simulation[]> = {
    tooth: toothBrushingSimulation,
    wire: flossingSimulation,
  };
  const handleaddMessage = () => {
    if (simulation.length < TypeArray[options].length) {
      setSimulation((prev) => [...prev, TypeArray[options][index]]);
      setIndex(index + 1);
    }
  };

  const onScroll = () => {
    try {
      refSroll.current?.scrollToEnd();
    } catch (_) {}
  };
  useEffect(() => {
    setTimeout(() => {
      onScroll();
    }, 1000);
  }, [handleaddMessage]);
  useEffect(() => {
    setSimulation([]);
    setIndex(0);
  }, [options]);
  return (
    <Container>
      <HeaderBack name={name}></HeaderBack>
      <Hr />
      <ViewExplication>
        <IconFlag
          stroke={theme.defaultTheme.addColors.freightDark}
          fill={theme.defaultTheme.addColors.freightDark}
        />
        <TitleHeader numberOfLines={1}>
          Veja estas simulações de como deve cuidar dos seus dentes 🦷
        </TitleHeader>
      </ViewExplication>
      <Animated.ScrollView
        ref={refSroll}
        entering={SlideInDown.duration(800)}
        style={{ height: "100%", flex: 1 }}
        scrollEventThrottle={16}
      >
        <ContentCard>
          {OptionSimulate.map((simulate, index) => (
            <TouchableOpacity
              key={index}
              style={{
                zIndex: options === simulate.type ? 1000 : 0,
                opacity: options === simulate.type ? 1 : 0.5,
              }}
              onPress={() => {
                setOptions(simulate.type);
              }}
            >
              <CardOptionsSimulation
                image={simulate.image}
                title={simulate.title}
              />
            </TouchableOpacity>
          ))}
        </ContentCard>
        <View style={{ marginBottom: 100 }}>
          {simulation.length > 0 && (
            <View style={{ gap: 16 }}>
              {simulation.map((item, index) => (
                <CardSimulation key={index} simulation={item} type={options} />
              ))}
            </View>
          )}
        </View>
      </Animated.ScrollView>
      <View style={{ bottom: 0, alignSelf: "center", position: "absolute" }}>
        <ButtonStart onPress={handleaddMessage} activeOpacity={0.5}>
          <IconStart
            width={16}
            height={16}
            fill={theme.colors.gray100}
            rotation={-90}
          />
          <TitleButton>Próximo</TitleButton>
        </ButtonStart>
      </View>
    </Container>
  );
}
