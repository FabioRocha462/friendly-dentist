import styled, { css } from "styled-components/native";
import { Persona } from ".";
interface ContainerProps {
  persona: Persona;
}
export const Container = styled.View<ContainerProps>`
  width: 75%;
  padding: 16px;
  border-radius: 12px;
  gap: 8px;
  align-items: center;
  justify-items: initial;
  background-color: ${({ theme, persona }) =>
    persona === "dentist"
      ? theme.defaultTheme.addColors.prime
      : theme.defaultTheme.addColors.freightDark};
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    color: #fff;
    font-family: ${theme.fontStyles.medium};
    font-size: ${theme.fontSize.body.xs};
  `}
`;
export const Name = styled.Text`
  ${({ theme }) => css`
    color: #fff;
    font-family: ${theme.fontStyles.bold};
    font-size: ${theme.fontSize.body.sm};
  `}
`;
export const ViewImageName = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
