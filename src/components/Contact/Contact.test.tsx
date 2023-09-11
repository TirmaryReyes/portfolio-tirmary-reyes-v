import { render, screen } from "@testing-library/react";
import Contact from "./Contact";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

describe("Given a Contact Component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title and social media link", () => {
      render(
        <ThemeProvider theme={theme}>
          <Contact />
        </ThemeProvider>
      );

      const title = "Connect with me";

      const expectedTitleElement = screen.getByText(title);

      expect(expectedTitleElement).toBeInTheDocument();
    });
  });

  test("Then it should show logo linkedin", () => {
    const expectedAltText = "logo linkedin";

    renderWithProviders(wrapWithRouter(<Contact />));

    const altText = screen.getByAltText(expectedAltText);

    expect(altText).toBeInTheDocument();
  });
});

test("Then it should show logo twitter", () => {
  const expectedAltText = "logo twitter";

  renderWithProviders(wrapWithRouter(<Contact />));

  const altText = screen.getByAltText(expectedAltText);

  expect(altText).toBeInTheDocument();
});

test("Then it should show logo github", () => {
  const expectedAltText = "logo github";

  renderWithProviders(wrapWithRouter(<Contact />));

  const altText = screen.getByAltText(expectedAltText);

  expect(altText).toBeInTheDocument();
});
