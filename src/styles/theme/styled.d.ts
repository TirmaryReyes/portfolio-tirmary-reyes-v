import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
    };

    fonts: {
      primary: string;
    };

    fontSizes: {
      medium: string;
      regular: string;
      bold: string;
      big: string;
    };

    fontWeigth: {
      regular: number;
      medium: number;
      semibold: number;
      bold: number;
    };

    spacing: {
      medium: string;
    };
  }
}

export default DefaultTheme;
