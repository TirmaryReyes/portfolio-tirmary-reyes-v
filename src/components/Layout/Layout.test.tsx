import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Layout from "./Layout";
import { screen } from "@testing-library/react";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with a 'NavBar' component", () => {
      renderWithProviders(wrapWithRouter(<Layout />));

      const navBarComponent = screen.getByRole("navigation");

      expect(navBarComponent).toBeInTheDocument();
    });
  });
});
