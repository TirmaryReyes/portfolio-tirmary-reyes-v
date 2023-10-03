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
      expect(projectImages).toHaveLength(3);

      const linkElement = screen.getByRole("link", { name: "Go to project" });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute(
        "href",
        "https://tirmary-reyes-final-project-front.netlify.app/home"
      );

      const descriptionTitleElement = screen.getByText("Sand Rose Plant Deco:");
      const descriptionTextElement = screen.getByText(
        "Is a user-friendly CRUD application that allows users to add, edit, and delete their plant collection."
      );
      const technologiesTextElement = screen.getByText(
        "It leverages technologies such as React, Redux, TypeScript, MongoDB, Express and Netlify to provide a seamless user experience."
      );

      const descriptionText = `${descriptionTitleElement.textContent} ${descriptionTextElement.textContent} ${technologiesTextElement.textContent}`;
      expect(descriptionText).toBeTruthy();
    });
  });
});
