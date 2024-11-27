import IconComment from "@assets/icons/ballonComent.svg";
import IconStart from "@assets/icons/VectorTriangle.svg";
import { OptionsGuide, TittleButton } from "@components/atoms/OptionsGuide";
import { CardConversation } from "@components/molecules/CardConversation";
import { HeaderBack } from "@components/molecules/HeaderBack";
import { useRoute } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";
import { conversation1, conversation2, ConversationProps } from "./data";
import {
  ButtonStart,
  Container,
  Hr,
  TitleButton,
  TitleHeader,
  ViewHeader,
} from "./styles";
import Animated, {
  SlideInRight,
  useAnimatedRef,
} from "react-native-reanimated";

interface RouteParams {
  nameScreen?: string;
}
export function Guide() {
  const route = useRoute();
  const theme = useTheme();
  const [options, setOptions] = useState<TittleButton>("Option 1");
  const refScrollAnimated = useAnimatedRef<Animated.ScrollView>();
  const [index, setIndex] = useState(0);
  const { nameScreen } = route.params as RouteParams;
  const name = nameScreen ? nameScreen : "Aproveite";
  const [conversation, setConversation] = useState<ConversationProps[]>([]);

  const handleNewMessage = () => {
    if (options === "Option 1" && conversation.length < conversation1.length) {
      setConversation((prev) => [...prev, conversation1[index]]);
      setIndex(index + 1);
      return;
    }
    if (options === "Option 2" && conversation.length < conversation2.length) {
      setConversation((prev) => [...prev, conversation2[index]]);
      setIndex(index + 1);
    }
  };
  useEffect(() => {
    try {
      refScrollAnimated.current?.scrollToEnd();
    } catch (error) {}
  }, [index]);
  useEffect(() => {
    setIndex(0);
    setConversation([]);
  }, [options]);

  return (
    <Container>
      <HeaderBack name={name} />
      <Hr />
      <ViewHeader>
        <IconComment stroke={theme.defaultTheme.addColors.freightDark} />
        <TitleHeader numberOfLines={1}>
          Leia estes guias para cuidar bem dos seus dentes! 😊
        </TitleHeader>
      </ViewHeader>
      <Hr />
      <OptionsGuide title={options} setTitle={setOptions} />
      <Animated.ScrollView
        ref={refScrollAnimated}
        style={{
          height: "100%",
        }}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        entering={SlideInRight.duration(500)}
      >
        {conversation.length === 0 && (
          <View
            style={{ alignSelf: "center", marginTop: 24, marginBottom: 24 }}
          >
            <ButtonStart onPress={handleNewMessage} activeOpacity={0.5}>
              <IconStart
                width={16}
                height={16}
                fill={theme.colors.gray100}
                rotation={-90}
              />
              <TitleButton>Começar</TitleButton>
            </ButtonStart>
          </View>
        )}
        <View style={{ gap: 16 }}>
          {conversation.map((item, index) => (
            <CardConversation
              persona={item.persona}
              conversation={item}
              key={index}
            />
          ))}
        </View>
      </Animated.ScrollView>
      {conversation.length > 0 && (
        <View style={{ bottom: 0, alignSelf: "center", position: "absolute" }}>
          <ButtonStart onPress={handleNewMessage} activeOpacity={0.5}>
            <IconStart
              width={16}
              height={16}
              fill={theme.colors.gray100}
              rotation={-90}
            />
            <TitleButton>Próximo</TitleButton>
          </ButtonStart>
        </View>
      )}
    </Container>
  );
}
