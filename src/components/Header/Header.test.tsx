import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Header from "./Header";
import { screen } from "@testing-library/react";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the message Hello! I am", () => {
      renderWithProviders(wrapWithRouter(<Header />));
      const expectedText = "Hello! I am";

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });

  test("Then it should show the message 'Tirmary Reyes'", () => {
    renderWithProviders(wrapWithRouter(<Header />));
    const expectedName = "Tirmary Reyes";

    const name = screen.getByText(expectedName);

    expect(name).toBeInTheDocument();
  });

  test("Then it should show the image with the alternative text 'Tirmary profile'", () => {
    renderWithProviders(wrapWithRouter(<Header />));

    const expectedAltText = "Tirmary profile";

    const imageProfile = screen.getAllByAltText(expectedAltText);

    expect(imageProfile.length).toBeGreaterThan(0);
  });
});
