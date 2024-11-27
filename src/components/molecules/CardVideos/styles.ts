import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

const width = Dimensions.get("screen").width - 32;
export const Container = styled.TouchableOpacity`
  width: ${width}px;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.gray100};
  border: 1px solid ${({ theme }) => theme.colors.colorBorder};
  border-radius: 12px;
  gap: 8px;
  margin-bottom: 16px;
  padding: 8px 16px 8px 8px;
`;
export const ViewVideo = styled.View`
  width: 100%;
  height: 150px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray800};
    font-family: ${theme.fontStyles.bold};
    font-size: ${theme.fontSize.body.sm};
  `}
`;
export const ViewFooter = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
