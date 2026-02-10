import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../testUtils";
import NavBar from "../components/NavBar";

/**
 * NavBar tests — verify navigation links, mobile menu toggle,
 * and external links are present.
 */

describe("NavBar", () => {
  beforeEach(() => {
    renderWithProviders(<NavBar />);
  });

  it("renders brand name and role", () => {
    expect(screen.getByText("Matt Bokovitz")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
  });

  it("renders desktop navigation links", () => {
    const homeLinks = screen.getAllByText("Home");
    expect(homeLinks.length).toBeGreaterThanOrEqual(1);
    const essayLinks = screen.getAllByText("Essays");
    expect(essayLinks.length).toBeGreaterThanOrEqual(1);
    const booksLinks = screen.getAllByText("Books");
    expect(booksLinks.length).toBeGreaterThanOrEqual(1);
  });

  it("renders external link icons with correct labels", () => {
    const githubLinks = screen.getAllByLabelText("GitHub");
    expect(githubLinks.length).toBeGreaterThan(0);

    const twitterLinks = screen.getAllByLabelText("X (Twitter)");
    expect(twitterLinks.length).toBeGreaterThan(0);

    const emailLinks = screen.getAllByLabelText("Email");
    expect(emailLinks.length).toBeGreaterThan(0);
  });

  it("opens mobile menu on hamburger click", () => {
    const menuButton = screen.getByLabelText("Open navigation menu");
    userEvent.click(menuButton);

    // Mobile menu should now have the close button visible
    expect(
      screen.getByLabelText("Close navigation menu")
    ).toBeInTheDocument();

    // Mobile nav section labels
    expect(screen.getByText("Navigation")).toBeInTheDocument();
    expect(screen.getByText("Connect")).toBeInTheDocument();
  });

  it("closes mobile menu on close button click", async () => {
    const menuButton = screen.getByLabelText("Open navigation menu");
    userEvent.click(menuButton);

    // Wait for body overflow to be set to hidden
    await waitFor(() => {
      expect(document.body.style.overflow).toBe("hidden");
    });

    const closeButton = screen.getByLabelText("Close navigation menu");
    userEvent.click(closeButton);

    // After closing, body overflow should be restored
    await waitFor(() => {
      expect(document.body.style.overflow).toBe("");
    });
  });

  it("external links open in new tab", () => {
    const githubLinks = screen.getAllByLabelText("GitHub");
    githubLinks.forEach((link) => {
      if (link.tagName === "A") {
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
      }
    });
  });
});
