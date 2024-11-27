import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";

const widthCalc = Dimensions.get("screen").width / 2 - 32;
export const Container = styled.TouchableOpacity`
  width: ${widthCalc}px;
  height: ${widthCalc}px;
  border-radius: 12px;
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.defaultTheme.addColors.freightDark};
  background-color: ${({ theme }) => theme.colors.gray100};
`;

export const ViewImage = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray800};
    font-family: ${theme.fontStyles.bold};
    font-size: ${theme.fontSize.body.sm};
  `}
  text-align:center;
  margin-bottom: 8px;
`;
