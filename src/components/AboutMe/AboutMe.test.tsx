import { render, screen } from "@testing-library/react";
import AboutMe from "./AboutMe";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";

describe("Given a AboutMe Component", () => {
  describe("When it is rendered", () => {
    beforeEach(() => {
      render(
        <ThemeProvider theme={theme}>
          <AboutMe />
        </ThemeProvider>
      );
    });

    test("Then it should show an image with the alternative text 'graduation had", () => {
      const imageElement = screen.getByAltText("graduation hat");
      expect(imageElement).toBeInTheDocument();
    });

    test("Then it should show a span with the description text", () => {
      const descriptionText =
        "Systems Engineer with a web development bootcamp background.";

      const descriptionElement = screen.getByText(descriptionText);

      expect(descriptionElement).toBeInTheDocument();
    });

    test("Then it should show an article with the explanation text", () => {
      const explanationText =
        "Dedicated to writing maintainable code and prioritizing rigorous testing for reliability, while consistently pursuing further knowledge.";

      const explanationElement = screen.getByText(explanationText);

      expect(explanationElement).toBeInTheDocument();
    });

    test("Then it should show a span with the professional information", () => {
      const studiesText =
        "Full Stack Developer, ISDI CODERS, Barcelona, Spain 2023.";

      const studiesElement = screen.getByText(studiesText);

      expect(studiesElement).toBeInTheDocument();
    });

    test("Then it should show a span with the professional information", () => {
      const professionalText =
        "Systems Engineer, IUP “Santiago Mariño”, Venezuela, 2014.";

      const professionalElement = screen.getByText(professionalText);

      expect(professionalElement).toBeInTheDocument();
    });
  });
});
