import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Header from "./Header";
import { screen } from "@testing-library/react";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show Hello", () => {
      const expectedAltText = "Hello";

      renderWithProviders(wrapWithRouter(<Header />));

      const altText = screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });
});
