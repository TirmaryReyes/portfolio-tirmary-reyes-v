import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe("Given a NavBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show renders the navigation links", () => {
      render(<NavBar />);

      const homeLink = screen.getByRole("link", { name: "home" });
      const aboutLink = screen.getByRole("link", { name: "about-me" });
      const stackLink = screen.getByRole("link", { name: "my-stack" });
      const projectLink = screen.getByRole("link", { name: "my-project" });
      const contactLink = screen.getByRole("link", { name: "contact-me" });

      expect(homeLink).toBeInTheDocument();
      expect(aboutLink).toBeInTheDocument();
      expect(stackLink).toBeInTheDocument();
      expect(projectLink).toBeInTheDocument();
      expect(contactLink).toBeInTheDocument();
    });
  });
});
