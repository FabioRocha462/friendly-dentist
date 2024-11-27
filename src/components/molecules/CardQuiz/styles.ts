import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";
const width = Dimensions.get("screen").width - 32;

export const Container = styled.View`
  width: ${width}px;
  align-self: center;
  background-color: #4c0677;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.defaultTheme.addColors.freightDark};
`;
export const ViewHeader = styled.View`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const ViewOptions = styled.View`
  padding: 16px;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
export const Hr = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.colorBorder};
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    color: #fff;
    font-family: ${theme.fontStyles.bold};
    font-size: ${theme.fontSize.body.sm};
  `}
  text-align:center
`;
