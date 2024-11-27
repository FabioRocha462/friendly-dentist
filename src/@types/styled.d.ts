import styled from "styled-components";
import { themeLight } from "../theme";

declare module "styled-components" {
  type ThemeType = typeof themeLight;

  export interface DefaultTheme extends ThemeType {}
}
