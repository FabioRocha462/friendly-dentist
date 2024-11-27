import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const ViewHeader = styled.View`
  width: 100%;
  padding: 16px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.gray100};
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const Hr = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.colorBorder};
`;
export const TitleHeader = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray800};
    font-family: ${theme.fontStyles.medium};
    font-size: ${theme.fontSize.body.sm};
  `}
`;

export const ButtonStart = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 8px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: ${({ theme }) => theme.defaultTheme.secondary.medium};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
`;
export const TitleButton = styled.Text`
  ${({ theme }) => css`
    color: #fff;
    font-family: ${theme.fontStyles.bold};
    font-size: ${theme.fontSize.body.md};
  `}
`;
