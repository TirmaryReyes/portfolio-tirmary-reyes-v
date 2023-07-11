import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Layout from "./Layout";
import { screen } from "@testing-library/react";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with a 'Hello' message", () => {
      const expectedAltText = "Hello";

      renderWithProviders(wrapWithRouter(<Layout />));

      const altText = screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });
});
