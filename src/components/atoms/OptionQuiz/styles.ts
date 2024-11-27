import styled, { css } from "styled-components/native";
interface StyleProps {
  isSelected?: boolean;
}
export const Container = styled.TouchableOpacity<StyleProps>`
  width: 100%;
  border: 2px solid
    ${({ theme, isSelected }) =>
      isSelected
        ? theme.defaultTheme.addColors.freightDark
        : theme.colors.gray600};
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.defaultTheme.link.medium : "#fff"};
`;

export const Title = styled.Text<StyleProps>`
  ${({ theme, isSelected }) => css`
    color: ${isSelected ? "#fff" : "#000"};
    font-family: ${theme.fontStyles.bold};
    font-size: ${theme.fontSize.body.sm};
  `}
  text-align:center;
`;
