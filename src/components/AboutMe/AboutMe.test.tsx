import { render, screen } from "@testing-library/react";
import AboutMe from "./AboutMe";

describe("Given a AboutMe Component", () => {
  describe("When it is rendered", () => {
    test("Then it should show AboutMe component with the correct content", () => {
      render(<AboutMe />);

      const headingElement = screen.getByText("About Me");
      expect(headingElement).toBeInTheDocument();

      const imageElement = screen.getByAltText("tirmary img");
      expect(imageElement).toBeInTheDocument();

      const paragraphElement = screen.getByText(
        "I am a passionate web developer with a background in System Engineering and experience from a web development bootcamp. I constantly strive to expand my knowledge and stay up-to-date with the latest trends in the field. I focus on delivering high-quality results, working in agile and collaborative environments. I believe in the importance of open communication and teamwork. Moreover, I strongly support the principles of writing maintainable code and ensuring scalability"
      );
      expect(paragraphElement).toBeInTheDocument();
    });
  });
});
