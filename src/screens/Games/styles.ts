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

export const ViewImage = styled.View`
  width: 100%;
  margin-top: 24px;
  align-items: center;
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
  margin-top: 16px;
`;


