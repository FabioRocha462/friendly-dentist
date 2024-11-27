import { ActivityIndicator, Linking, View } from "react-native";
import { Container, Title, ViewFooter, ViewVideo } from "./styles";
import WebView from "react-native-webview";
import { useState } from "react";
import { useTheme } from "styled-components";

interface CardVideosProps {
  link: string;
  title: string;
}
export function CardVideos({ link, title }: CardVideosProps) {
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  return (
    <Container
      activeOpacity={0.5}
      onPress={() => {
        Linking.openURL(link);
      }}
    >
      <ViewVideo>
        {isLoading && (
          <View style={{ alignSelf: "center" }}>
            <ActivityIndicator
              size="large"
              color={theme.defaultTheme.feedback.sucess.success500}
            />
          </View>
        )}
        <WebView
          style={{ width: "110%", alignSelf: "center" }}
          source={{ uri: link }}
          javaScriptEnabled={true}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
        />
      </ViewVideo>
      <ViewFooter>
        <Title>{title}</Title>
      </ViewFooter>
    </Container>
  );
}
