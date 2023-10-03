import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

import { screen } from "@testing-library/react";
import MyStack from "./MyStack";

describe("Given a MyStack component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'My Stack'", () => {
      renderWithProviders(wrapWithRouter(<MyStack />));

      const titleElement = screen.getByText("My Stack");

      expect(titleElement).toBeInTheDocument();
    });
  });

  test("Then it should show a javascript logo", () => {
    const expectedAltText = "javascript logo";

    renderWithProviders(wrapWithRouter(<MyStack />));

    const altText = screen.getByAltText(expectedAltText);

    expect(altText).toBeInTheDocument();
  });
});

test("Then it should show a typeScript logo", () => {
  const expectedAltText = "typeScript logo";

  renderWithProviders(wrapWithRouter(<MyStack />));

  const altText = screen.getByAltText(expectedAltText);

  expect(altText).toBeInTheDocument();
});

test("Then it should show a react logo", () => {
  const expectedAltText = "react logo";

  renderWithProviders(wrapWithRouter(<MyStack />));

  const altText = screen.getByAltText(expectedAltText);

  expect(altText).toBeInTheDocument();
});

test("Then it should show a redux logo", () => {
  const expectedAltText = "redux logo";

  renderWithProviders(wrapWithRouter(<MyStack />));

  const altText = screen.getByAltText(expectedAltText);

  expect(altText).toBeInTheDocument();
});

test("Then it should show a css logo", () => {
  const expectedAltText = "css logo";

  renderWithProviders(wrapWithRouter(<MyStack />));

  const altText = screen.getByAltText(expectedAltText);

  expect(altText).toBeInTheDocument();
});

test("Then it should show a html logo", () => {
  const expectedAltText = "html logo";

  renderWithProviders(wrapWithRouter(<MyStack />));

  const altText = screen.getByAltText(expectedAltText);

  expect(altText).toBeInTheDocument();
});

test("Then it should show a node logo", () => {
  const expectedAltText = "node.js logo";

  renderWithProviders(wrapWithRouter(<MyStack />));

  const altText = screen.getByAltText(expectedAltText);

  expect(altText).toBeInTheDocument();
});

test("Then it should show a figma logo", () => {
  const expectedAltText = "figma logo";

  renderWithProviders(wrapWithRouter(<MyStack />));

  const altText = screen.getByAltText(expectedAltText);

  expect(altText).toBeInTheDocument();
});

test("Then it should show a mongoDB logo", () => {
  const expectedAltText = "mongoDB logo";

  renderWithProviders(wrapWithRouter(<MyStack />));

  const altText = screen.getByAltText(expectedAltText);

  expect(altText).toBeInTheDocument();
});

test("Then it should show a jest logo", () => {
  const expectedAltText = "jest logo";

  renderWithProviders(wrapWithRouter(<MyStack />));

  const altText = screen.getByAltText(expectedAltText);

  expect(altText).toBeInTheDocument();
});

test("Then it should show a git logo", () => {
  const expectedAltText = "git logo";

  renderWithProviders(wrapWithRouter(<MyStack />));

  const altText = screen.getByAltText(expectedAltText);

  expect(altText).toBeInTheDocument();
});

test("Then it should show a github logo", () => {
  const expectedAltText = "github logo";

  renderWithProviders(wrapWithRouter(<MyStack />));

  const altText = screen.getByAltText(expectedAltText);

  expect(altText).toBeInTheDocument();
});
