import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;
export const Hr = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.colorBorder};
`;

export const ViewExplication = styled.View`
  flex-direction: row;
  padding: 16px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray100};
  gap: 4px;
`;
export const TitleHeader = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray600};
    font-family: ${theme.fontStyles.bold};
    font-size: ${theme.fontSize.body.xs};
  `}
`;
export const ContentCard = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
  margin-top: 4px;
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
