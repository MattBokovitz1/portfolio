import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../testUtils";
import Home from "../components/home/Home";
import HeroDisplay from "../components/home/HomeDisplay";
import MattsSection from "../components/home/MattsSection";
import Projects from "../components/home/Projects";
import Footer from "../components/Footer";
import projects from "../data/projects";

/**
 * Home page component tests — verify that each section of the
 * home page renders its key content correctly.
 */

describe("HeroDisplay", () => {
  beforeEach(() => {
    renderWithProviders(<HeroDisplay />);
  });

  it("renders the name and greeting", () => {
    expect(screen.getByText("Matt Bokovitz")).toBeInTheDocument();
    expect(
      screen.getByText(/Software Engineer.*Milwaukee/i)
    ).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    expect(
      screen.getByText(/Building thoughtful software/i)
    ).toBeInTheDocument();
  });

  it("renders the rose window mandala", () => {
    expect(
      screen.getByLabelText(/Rose stained-glass window mandala/i)
    ).toBeInTheDocument();
  });

  it("renders all topic legend items", () => {
    const topics = [
      "Psychology", "Philosophy", "Classics", "History",
      "Religion", "Science", "Politics", "Mathematics",
    ];
    topics.forEach((topic) => {
      expect(screen.getByText(topic)).toBeInTheDocument();
    });
  });

  it("renders CTA buttons", () => {
    expect(screen.getByText(/About Me/i)).toBeInTheDocument();
    expect(screen.getByText(/Get in Touch/i)).toBeInTheDocument();
  });

  it("renders social links", () => {
    const githubLinks = screen.getAllByLabelText("GitHub");
    expect(githubLinks.length).toBeGreaterThan(0);
  });
});

describe("MattsSection", () => {
  beforeEach(() => {
    renderWithProviders(<MattsSection />);
  });

  it("renders the About Me heading", () => {
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("renders the profile photo", () => {
    expect(screen.getByAltText("Matt Bokovitz")).toBeInTheDocument();
  });

  it("renders the bio text", () => {
    expect(
      screen.getByText(/Software Engineer at Northwestern Mutual/i)
    ).toBeInTheDocument();
  });

  it("renders tech stack items", () => {
    const techItems = ["React.js", "Node.js", "TypeScript", "MySQL", "JavaScript", "CSS"];
    techItems.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it("renders Tech I work with heading", () => {
    expect(screen.getByText("Tech I work with")).toBeInTheDocument();
  });
});

describe("Projects", () => {
  beforeEach(() => {
    renderWithProviders(<Projects />);
  });

  it("renders the Projects heading", () => {
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("renders all project titles", () => {
    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it("renders all project descriptions", () => {
    projects.forEach((project) => {
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });

  it("renders action buttons for projects", () => {
    const sourceCodeBtns = screen.getAllByText("Source Code");
    expect(sourceCodeBtns.length).toBeGreaterThan(0);
  });
});

describe("Footer", () => {
  beforeEach(() => {
    renderWithProviders(<Footer />);
  });

  it("renders copyright with current year", () => {
    const year = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`${year}.*Matt Bokovitz`))
    ).toBeInTheDocument();
  });

  it("renders social links", () => {
    expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
    expect(screen.getByLabelText("X (Twitter)")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });
});

describe("Home (full page assembly)", () => {
  it("renders all three sections", () => {
    renderWithProviders(<Home />);
    // Hero
    expect(screen.getByText("Matt Bokovitz")).toBeInTheDocument();
    // About — multiple "About Me" exist (CTA button + section heading)
    const aboutMeElements = screen.getAllByText("About Me");
    expect(aboutMeElements.length).toBeGreaterThanOrEqual(2);
    // Projects
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });
});
