import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
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
`;
export const ViewHeader = styled.View`
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.gray100};
  border: 1px solid ${({ theme }) => theme.colors.colorBorder};
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const TitleHeader = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontStyles.bold};
    font-size: ${theme.fontSize.body.md};
    color: ${theme.colors.gray800};
  `};
  text-align: center;
`;
