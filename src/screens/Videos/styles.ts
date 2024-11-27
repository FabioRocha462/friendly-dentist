import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Viewcontent = styled.View`
  flex: 1;
`;
export const ViewHeader = styled.View`
  width: 100%;
  padding: 16px;
`;

export const TextTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray700};
    font-family: ${theme.fontStyles.bold};
    font-size: ${theme.fontSize.body.sm};
  `};
`;

export const ViewIconAndTitle = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
