import { render, screen } from "@testing-library/react";
import ProfessionalOpinions from "./ProfessionalOpinions";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";

describe("Given a ProfessionalOpinions Component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title and opinions content", () => {
      render(
        <ThemeProvider theme={theme}>
          <ProfessionalOpinions />
        </ThemeProvider>
      );

      const titleElement = screen.getByText("Professional Opinions");
      expect(titleElement).toBeInTheDocument();

      const opinions = [
        {
          name: "Diego Callegari",
          content: `"Tirmary is a very focused person with an exceptional eye for detail. We have worked together building CRUD web applications. Her positive attitude and concern for the group is truly commendable."`,
          linkedIn: "https://www.linkedin.com/in/tirmary-reyes/",
        },
        {
          name: "Anna Marrodán Pellicer",
          content: `"Having Tirmary as a student in the Full Stack Development Bootcamp has been a pleasure. Her journey through the Bootcamp has been characterised by her resilience and adaptability, as she approached both the curriculum and coding challenges with determination and eagerness to learn."`,
          linkedIn: "https://www.linkedin.com/in/tirmary-reyes/",
        },
        {
          name: "Gina Marieges Rosés",
          content: `"Tirmary is a fighter, a hard worker, resilient and a empathic woman. She always take's care of the team. It has truly been a privilege to have had the opportunity to collaborate with her."`,
          linkedIn: "https://www.linkedin.com/in/tirmary-reyes/",
        },
      ];

      opinions.forEach((opinion) => {
        const nameElement = screen.getByText(opinion.name);
        expect(nameElement).toBeInTheDocument();

        const contentElement = screen.getByText(opinion.content);
        expect(contentElement).toBeInTheDocument();

        const linkedInLinks = screen.getAllByRole("link", {
          name: "Visit LinkedIn Profile",
        });

        linkedInLinks.forEach((linkedInLink, index) => {
          expect(linkedInLink).toBeInTheDocument();
          expect(linkedInLink).toHaveAttribute(
            "href",
            opinions[index].linkedIn
          );
        });
      });
    });
  });
});
