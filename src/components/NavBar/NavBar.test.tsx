import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar component", () => {
  test("renders the navigation links", () => {
    render(<NavBar />);

    const homeLink = screen.getByText("Home");
    const aboutLink = screen.getByText("About me");
    const stackLink = screen.getByText("My stack");
    const projectLink = screen.getByText("Project");
    const contactLink = screen.getByText("Contact");

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(stackLink).toBeInTheDocument();
    expect(projectLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });
});
