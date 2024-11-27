import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.defaultTheme.default};
`;

export const ViewContent = styled.View`
  justify-content: center;
  align-items: center;
`;
