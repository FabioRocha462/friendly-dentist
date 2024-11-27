import { TypeOption } from "@screens/Simulations/data";
import styled, { css } from "styled-components/native";
interface MessageProps {
  type: TypeOption;
}
export const Container = styled.View`
  width: 70%;
  padding-left: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: initial;
  gap: 4px;
`;

export const Message = styled.View<MessageProps>`
  background-color: ${({ theme, type }) =>
    type === "tooth"
      ? theme.defaultTheme.link.medium
      : theme.defaultTheme.addColors.freightDark};
  padding: 16px;
  border-radius: 12px;
`;

export const TextMessage = styled.Text`
  ${({ theme }) => css`
    color: #fff;
    font-family: ${theme.fontStyles.medium};
    font-size: ${theme.fontSize.body.sm};
  `};
`;
