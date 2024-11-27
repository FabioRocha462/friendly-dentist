import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  justify-content: flex-start;
  width: 34px;
  height: 34px;
  z-index: 10;
`;

export const ViewBack = styled.View`
  width: 34px;
  height: 34px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.colorBorder};
  align-items: center;
  justify-content: center;
`;
