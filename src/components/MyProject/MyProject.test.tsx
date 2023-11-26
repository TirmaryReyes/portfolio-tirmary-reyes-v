import { render, screen } from "@testing-library/react";
import MyProject from "./MyProject";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";

describe("Given a MyProject Component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title, images, link, and the project description is present", () => {
      render(
        <ThemeProvider theme={theme}>
          <MyProject />
        </ThemeProvider>
      );

      const titleElement = screen.getByText("Currently working on");
      expect(titleElement).toBeInTheDocument();

      const projectImages = screen.getAllByRole("img");
      expect(projectImages).toHaveLength(5);

      const linkElement = screen.getByRole("link", {
        name: "Go to Figma Design",
      });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute(
        "href",
        "https://www.figma.com/file/N1CBmbK7IveFJXFJHh4P5d/Untitled?type=design&node-id=61-39&mode=design&t=p10Xj9RDZQtLyXIc-0"
      );

      const descriptionTitleElement = screen.getByText("Summit Venture:");
      const descriptionTextElement = screen.getByText(
        "Is a user-friendly CRUD application that allows users to add, edit, and delete their place collection."
      );
      const technologiesTextElement = screen.getByText(
        "It leverages technologies such as React, Redux, TypeScript, MongoDB, Express and Netlify to provide a seamless user experience."
      );

      const descriptionText = `${descriptionTitleElement.textContent} ${descriptionTextElement.textContent} ${technologiesTextElement.textContent}`;
      expect(descriptionText).toBeTruthy();
    });
  });
});
