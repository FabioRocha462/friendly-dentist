import { useRoute } from "@react-navigation/native";
import {
  Container,
  TextTitle,
  Viewcontent,
  ViewHeader,
  ViewIconAndTitle,
} from "./styles";
import { HeaderBack } from "@components/molecules/HeaderBack";
import { FlashList } from "@shopify/flash-list";
import { arrayVideos } from "./data";
import { CardVideos } from "@components/molecules/CardVideos";
import { View } from "react-native";
import Icon from "@assets/icons/VectorTriangle.svg";
import { useTheme } from "styled-components/native";
interface RouteParams {
  nameScreen?: string;
}
export function Videos() {
  const route = useRoute();
  const { nameScreen } = route.params as RouteParams;
  const name = nameScreen ? nameScreen : "Aproveite";
  const theme = useTheme();
  const ListHeaderComponent = () => {
    return (
      <ViewHeader>
        <ViewIconAndTitle>
          <Icon fill={theme.colors.gray800} rotation={-90} />
          <TextTitle numberOfLines={1}>
            Assista vídeos educativos sobre saúde bocal
          </TextTitle>
        </ViewIconAndTitle>
      </ViewHeader>
    );
  };
  return (
    <Container>
      <HeaderBack name={name} />
      <Viewcontent>
        <FlashList
          data={arrayVideos}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={250}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item }) => (
            <CardVideos title={item.title} link={item.link} />
          )}
          ListFooterComponent={<View style={{ marginBottom: 24 }} />}
          ListHeaderComponent={ListHeaderComponent}
        />
      </Viewcontent>
    </Container>
  );
}
