import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../testUtils";
import App from "../App";

/**
 * App routing tests — verify that navigating to different routes
 * renders the correct page content.
 */

describe("App routing", () => {
  it("renders the home page at /", () => {
    renderWithProviders(<App />, { route: "/" });
    // Name appears in both navbar brand and hero title
    const nameElements = screen.getAllByText("Matt Bokovitz");
    expect(nameElements.length).toBeGreaterThanOrEqual(2);
    // "About Me" appears as both a CTA button and section heading
    const aboutElements = screen.getAllByText(/About Me/i);
    expect(aboutElements.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the essays page at /essays", () => {
    renderWithProviders(<App />, { route: "/essays" });
    // "Essays" appears in both navbar and page heading
    const essayElements = screen.getAllByText("Essays");
    expect(essayElements.length).toBeGreaterThanOrEqual(2);
  });

  it("renders the books page at /books", () => {
    renderWithProviders(<App />, { route: "/books" });
    // "Books" appears in navbar and page heading
    const bookElements = screen.getAllByText("Books");
    expect(bookElements.length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText("Books I've Read")).toBeInTheDocument();
    expect(screen.getByText("Want to Read")).toBeInTheDocument();
  });

  it("renders the navbar on every page", () => {
    renderWithProviders(<App />, { route: "/" });
    const homeLinks = screen.getAllByText("Home");
    expect(homeLinks.length).toBeGreaterThanOrEqual(1);
    const essayLinks = screen.getAllByText("Essays");
    expect(essayLinks.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the footer on every page", () => {
    renderWithProviders(<App />, { route: "/" });
    expect(
      screen.getByText(/Matt Bokovitz.*Built with React/i)
    ).toBeInTheDocument();
  });
});
