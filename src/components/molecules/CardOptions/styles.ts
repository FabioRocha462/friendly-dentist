import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";

const width = Dimensions.get("screen").width / 2 - 32;
export const Container = styled.TouchableOpacity`
  width: ${width}px;
  align-items: center;
  justify-content: center;
  padding-bottom: 8px;
  border: 1px solid ${({ theme }) => theme.colors.colorBorder};
  background-color: ${({ theme }) => theme.colors.gray100};
  gap: 8px;
  border-radius: 12px;
`;

export const ViewImage = styled.View`
  width: 100%;
  height: 120px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.colorBorder};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray800};
    font-family: ${theme.fontStyles.bold};
    font-size: ${theme.fontSize.body.sm};
  `}
`;
