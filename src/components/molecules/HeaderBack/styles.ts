import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray100};
`;

export const NamneScreen = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray800};
    font-family: ${theme.fontStyles.bold};
    font-size: ${theme.fontSize.body.sm};
  `}
`;
