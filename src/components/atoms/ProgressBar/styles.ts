import styled from "styled-components/native";
import { Dimensions } from "react-native";

const width = Dimensions.get("screen").width - 32;
export const Container = styled.View`
  width: ${width}px;
  background-color: ${({ theme }) => theme.colors.gray100};
  margin-top: 16px;
  border-radius: 8px;
`;
