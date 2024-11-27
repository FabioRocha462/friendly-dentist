import styled, { css } from "styled-components/native";
export const Container = styled.View`
  width: 100%;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.gray100};
  gap: 4px;
`;
export const ViewImage = styled.View`
  width: 40px;
  border-radius: 999px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.defaultTheme.secondary.medium};
  overflow: hidden;
`;

export const TitleWelcome = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray800};
    font-family: ${theme.fontStyles.bold};
    font-size: ${theme.fontSize.body.sm};
  `};
`;
