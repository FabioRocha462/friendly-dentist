import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #000;
`;

export const ViewGif = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const TitleCongratulations = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontStyles.bold};
    font-size: ${theme.fontSize.body.xxl};
    color: #fff;
  `}
  text-align: center;
`;
