import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";

describe("Given a NavBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show renders the navigation links", () => {
      render(
        <ThemeProvider theme={theme}>
          <NavBar />
        </ThemeProvider>
      );

      const projectLink = screen.getByRole("link", { name: "Project" });
      const contactLink = screen.getByRole("link", { name: "Contact" });

      expect(projectLink).toBeInTheDocument();
      expect(contactLink).toBeInTheDocument();
    });
  });
});
