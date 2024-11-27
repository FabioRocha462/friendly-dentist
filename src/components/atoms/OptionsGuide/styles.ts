import styled, { css } from "styled-components/native";

interface Button {
  isActive?: boolean;
}
export const Container = styled.View`
  width: 100%;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: 16px;
  gap: 16px;
`;

export const Button = styled.TouchableOpacity<Button>`
  background-color: ${({ theme }) => theme.defaultTheme.addColors.freightDark};
  border: 2px solid
    ${({ theme, isActive }) =>
      isActive
        ? theme.defaultTheme.primary.medium
        : theme.defaultTheme.feedback.alert.medium};
  padding: 8px;
  border-radius: 12px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: #fff;
    font-family: ${theme.fontStyles.bold};
    font-size: ${theme.fontSize.body.sm};
  `}
`;
