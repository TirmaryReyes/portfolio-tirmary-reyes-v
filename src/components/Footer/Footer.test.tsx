import { ThemeProvider } from "styled-components";
import Footer from "./Footer";
import theme from "../../styles/theme/theme";
import { render, screen } from "@testing-library/react";

describe("Given a Footer component", () => {
  describe("When it is rendered", () => {
    test("Then iit should show a message 'Built, tested, and designed by Tirmary Reyes 🍀'", () => {
      render(
        <ThemeProvider theme={theme}>
          <Footer />
        </ThemeProvider>
      );

      const messageElement = screen.getByText(
        "Built, tested, and designed by Tirmary Reyes 🍀"
      );

      expect(messageElement).toBeInTheDocument();
    });

    test("Then it should show a message '© {new Date().getFullYear()} All rights reserved.'", () => {
      render(
        <ThemeProvider theme={theme}>
          <Footer />
        </ThemeProvider>
      );

      const currentYear = new Date().getFullYear();

      const rightsReseverd = screen.getByText(
        `© ${currentYear} All rights reserved.`
      );

      expect(rightsReseverd).toBeInTheDocument();
    });
  });
});
