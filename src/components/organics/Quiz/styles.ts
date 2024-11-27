import styled, { css } from "styled-components/native";

interface ButtonProps {
  isActive?: boolean;
}
interface ContainerProps {
  backgroundColor: string;
}
export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
`;
export const Hr = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.colorBorder};
`;
export const Button = styled.TouchableOpacity<ButtonProps>`
  ${({ theme, isActive }) => css`
    background-color: ${isActive
      ? theme.defaultTheme.default
      : theme.defaultTheme.primary.bold};
  `}
  border-radius: 12px;
  padding: 16px;
`;
export const TitleButton = styled.Text`
  ${({ theme }) => css`
    color: #fff;
    font-family: ${theme.fontStyles.medium};
    font-size: ${theme.fontSize.body.md};
  `}
`;
export const ViewButton = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 24px;
  flex-direction: row;

  gap: 24px;
`;

export const ViewPoints = styled.View`
  background-color: #4c0677;
  align-items: center;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin-top: 16px;
  border-radius: 8px;
`;
export const TitlePointes = styled.Text`
  ${({ theme }) => css`
    color: #fff;
    font-family: ${theme.fontStyles.bold};
    font-size: ${theme.fontSize.body.md};
  `}
`;
