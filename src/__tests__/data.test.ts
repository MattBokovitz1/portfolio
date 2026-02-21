import pastBooks from "../data/pastbooks";
import potentialBooks from "../data/potentialbooks";
import projects from "../data/projects";
import essays from "../data/essays";

/**
 * Data integrity tests — ensure all data files export valid,
 * well-formed arrays with required fields and no duplicates.
 */

describe("pastBooks data", () => {
  it("exports a non-empty array", () => {
    expect(Array.isArray(pastBooks)).toBe(true);
    expect(pastBooks.length).toBeGreaterThan(0);
  });

  it("every book has required fields", () => {
    pastBooks.forEach((book) => {
      expect(book).toHaveProperty("id");
      expect(book).toHaveProperty("title");
      expect(book).toHaveProperty("author");
      expect(book).toHaveProperty("rating");
      expect(book).toHaveProperty("topic");
    });
  });

  it("every book has a numeric rating between 1 and 10", () => {
    pastBooks.forEach((book) => {
      const rating = parseInt(book.rating, 10);
      expect(rating).toBeGreaterThanOrEqual(1);
      expect(rating).toBeLessThanOrEqual(10);
    });
  });

  it("has no duplicate IDs", () => {
    const ids = pastBooks.map((b) => b.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every book has a non-empty title and author", () => {
    pastBooks.forEach((book) => {
      expect(book.title.trim().length).toBeGreaterThan(0);
      expect(book.author.trim().length).toBeGreaterThan(0);
    });
  });
});

describe("potentialBooks data", () => {
  it("exports a non-empty array", () => {
    expect(Array.isArray(potentialBooks)).toBe(true);
    expect(potentialBooks.length).toBeGreaterThan(0);
  });

  it("every book has required fields", () => {
    potentialBooks.forEach((book) => {
      expect(book).toHaveProperty("id");
      expect(book).toHaveProperty("title");
      expect(book).toHaveProperty("author");
      expect(book).toHaveProperty("rating");
      expect(book).toHaveProperty("topic");
    });
  });

  it("every book has a numeric rating between 1 and 10", () => {
    potentialBooks.forEach((book) => {
      const rating = parseInt(book.rating, 10);
      expect(rating).toBeGreaterThanOrEqual(1);
      expect(rating).toBeLessThanOrEqual(10);
    });
  });

  it("has no duplicate IDs", () => {
    const ids = potentialBooks.map((b) => b.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("projects data", () => {
  it("exports an array", () => {
    expect(Array.isArray(projects)).toBe(true);
  });

  it("every project has required fields", () => {
    projects.forEach((project) => {
      expect(project).toHaveProperty("id");
      expect(project).toHaveProperty("title");
      expect(project).toHaveProperty("description");
    });
  });

  it("every project has at least one link", () => {
    projects.forEach((project) => {
      const hasLink = project.project_link || project.github_link;
      expect(hasLink).toBeTruthy();
    });
  });

  it("has no duplicate IDs", () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("essays data", () => {
  it("exports an array", () => {
    expect(Array.isArray(essays)).toBe(true);
  });

  it("every essay has required fields", () => {
    essays.forEach((essay) => {
      expect(essay).toHaveProperty("id");
      expect(essay).toHaveProperty("title");
      expect(essay).toHaveProperty("body");
    });
  });
});
