import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Header from "./Header";
import { screen } from "@testing-library/react";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the message Hi I am", () => {
      const expectedText = "Hi I am";

      renderWithProviders(wrapWithRouter(<Header />));

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });

  test("Then it should show github logo", () => {
    const expectedAltText = "github logo";

    renderWithProviders(wrapWithRouter(<Header />));

    const altText = screen.getByAltText(expectedAltText);

    expect(altText).toBeInTheDocument();
  });
});

test("Then it should show linkedin logo", () => {
  const expectedAltText = "linkedin logo";

  renderWithProviders(wrapWithRouter(<Header />));

  const altText = screen.getByAltText(expectedAltText);

  expect(altText).toBeInTheDocument();
});

test("Then it should show twitter logo", () => {
  const expectedAltText = "twitter logo";

  renderWithProviders(wrapWithRouter(<Header />));

  const altText = screen.getByAltText(expectedAltText);

  expect(altText).toBeInTheDocument();
});
