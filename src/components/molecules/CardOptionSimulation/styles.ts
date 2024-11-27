import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";

const width = Dimensions.get("screen").width / 2 - 32;
export const Container = styled.View`
  width: ${width}px;
  height: ${width * 1.5}px;
  background-color: ${({ theme }) => theme.colors.gray100};
  border: 1px solid ${({ theme }) => theme.defaultTheme.addColors.freightDark};
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  gap: 8px;
  padding: 8px;
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray800};
    font-family: ${theme.fontStyles.bold};
    font-size: ${theme.fontSize.body.sm};
  `}
  text-align:center
`;
