import { render, screen } from "@testing-library/react";
import AboutMe from "./AboutMe";

describe("Given a AboutMe Component", () => {
  describe("When it is rendered", () => {
    test("Then it should show AboutMe component with the correct content", () => {
      render(<AboutMe />);

      const imageElement = screen.getByAltText("tirmary img");
      expect(imageElement).toBeInTheDocument();

      const paragraphElement = screen.getByText(
        "Passionate web developer with System Engineering background and bootcamp experience. Committed to ongoing learning, staying current with trends. Emphasizes quality results, agility, and collaboration. Values open communication, teamwork, maintainable, scalable code."
      );
      expect(paragraphElement).toBeInTheDocument();
    });
  });
});
