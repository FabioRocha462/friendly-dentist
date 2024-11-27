import { CardOptions } from "@components/molecules/CardOptions";
import { Headers } from "@components/molecules/Headers";
import { Image } from "expo-image";
import React from "react";
import Animated, { SlideInUp } from "react-native-reanimated";
import { useTheme } from "styled-components";
import ImageLogo from "../../../assets/icon.png";
import { arrayInformations } from "./data";
import { Container, ContentCard, TitleHeader, ViewHeader } from "./styles";

export function Home() {
  const theme = useTheme();
  return (
    <Container>
      <Headers />
      <ViewHeader>
        <TitleHeader>O Guia do dentista Amigo</TitleHeader>

        <Image
          source={ImageLogo}
          style={{
            width: 150,
            height: 150,
            borderRadius: 12,
            borderColor: theme.colors.colorBorder,
            borderWidth: 2,
          }}
        />
      </ViewHeader>

      <Animated.ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: 48 }}
        entering={SlideInUp.duration(800)}
      >
        <ContentCard>
          {arrayInformations.map((card, index) => (
            <CardOptions
              key={index}
              name={card.name}
              image={card.image}
              navigation={card.navigation}
            />
          ))}
        </ContentCard>
      </Animated.ScrollView>
    </Container>
  );
}
