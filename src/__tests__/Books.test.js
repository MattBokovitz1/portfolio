import React from "react";
import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../testUtils";
import Books from "../components/books/Books";
import pastBooks from "../data/pastbooks";
import potentialBooks from "../data/potentialbooks";

/**
 * Books component tests — covers tab switching, topic filtering,
 * sort toggling, and correct book counts.
 */

describe("Books component", () => {
  let user;

  beforeEach(() => {
    user = userEvent.setup();
    renderWithProviders(<Books />);
  });

  it("renders section title and both tabs", () => {
    expect(screen.getByText("Books")).toBeInTheDocument();
    expect(screen.getByText("Books I've Read")).toBeInTheDocument();
    expect(screen.getByText("Want to Read")).toBeInTheDocument();
  });

  it("defaults to the 'read' tab with correct count", () => {
    const readTab = screen.getByText("Books I've Read");
    expect(readTab).toHaveAttribute("aria-selected", "true");
    expect(
      screen.getByText(`${pastBooks.length} books`)
    ).toBeInTheDocument();
  });

  it("switches to 'want to read' tab and shows correct count", async () => {
    await user.click(screen.getByText("Want to Read"));

    const wantTab = screen.getByText("Want to Read");
    expect(wantTab).toHaveAttribute("aria-selected", "true");
    expect(
      screen.getByText(`${potentialBooks.length} books`)
    ).toBeInTheDocument();
  });

  it("shows topic filter chips", () => {
    // 'all' chip should always be present
    const allChips = screen.getAllByText("all");
    expect(allChips.length).toBeGreaterThan(0);
    // At least one topic from pastBooks should appear as a filter chip
    const firstTopic = pastBooks[0].topic;
    const topicElements = screen.getAllByText(firstTopic);
    expect(topicElements.length).toBeGreaterThan(0);
  });

  it("filters books by topic", async () => {
    const topic = pastBooks[0].topic;
    const expectedCount = pastBooks.filter((b) => b.topic === topic).length;

    // Click the filter chip (the first button with this topic text)
    const topicElements = screen.getAllByText(topic);
    const filterChip = topicElements.find((el) => el.tagName === "BUTTON");
    await user.click(filterChip);

    const suffix = expectedCount === 1 ? "book" : "books";
    expect(
      screen.getByText(`${expectedCount} ${suffix}`)
    ).toBeInTheDocument();
  });

  it("resets filter when switching tabs", async () => {
    // Filter by a topic first
    const topic = pastBooks[0].topic;
    const topicElements = screen.getAllByText(topic);
    const filterChip = topicElements.find((el) => el.tagName === "BUTTON");
    await user.click(filterChip);

    // Switch to want tab
    await user.click(screen.getByText("Want to Read"));

    // Count should be all potential books
    expect(
      screen.getByText(`${potentialBooks.length} books`)
    ).toBeInTheDocument();
  });

  it("shows sort controls with Rating button", () => {
    expect(screen.getByText("Sort by:")).toBeInTheDocument();
    // There are multiple "Rating" texts (button + table header), just check at least one
    const ratingElements = screen.getAllByText("Rating");
    expect(ratingElements.length).toBeGreaterThan(0);
  });

  it("shows Year sort button only on read tab", async () => {
    // On read tab, Year sort button should exist
    const yearButtons = screen.getAllByText("Year");
    expect(yearButtons.length).toBeGreaterThan(0);

    // Switch to want tab — Year sort should disappear from controls
    await user.click(screen.getByText("Want to Read"));
    // The table header "Year" should also be gone on want tab
    // Only rating sort should remain in the controls
    const yearAfter = screen.queryAllByText("Year");
    expect(yearAfter.length).toBe(0);
  });

  it("toggles rating sort: desc → asc → none", async () => {
    // Use the sort controls button (not the table header)
    const sortControls = screen.getByText("Sort by:").parentElement;
    const ratingBtn = within(sortControls).getByText("Rating");

    // First click → rating-desc
    await user.click(ratingBtn);
    // Second click → rating-asc
    await user.click(ratingBtn);
    // Third click → none (back to default)
    await user.click(ratingBtn);

    // After 3 clicks we should be back at the original count with no errors
    expect(
      screen.getByText(`${pastBooks.length} books`)
    ).toBeInTheDocument();
  });
});

describe("Books sorting correctness", () => {
  it("sorts books by rating descending", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Books />);

    const sortControls = screen.getByText("Sort by:").parentElement;
    const ratingBtn = within(sortControls).getByText("Rating");
    await user.click(ratingBtn); // desc

    // Get all rating cells from the desktop table
    const ratingCells = screen
      .getAllByText(/^([1-9]|10)$/)
      .filter((el) => el.closest("td"));

    const ratings = ratingCells.map((el) => parseInt(el.textContent, 10));

    // Verify sorted descending
    for (let i = 1; i < ratings.length; i++) {
      expect(ratings[i]).toBeLessThanOrEqual(ratings[i - 1]);
    }
  });

  it("sorts books by rating ascending on second click", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Books />);

    const sortControls = screen.getByText("Sort by:").parentElement;
    const ratingBtn = within(sortControls).getByText("Rating");
    await user.click(ratingBtn); // desc
    await user.click(ratingBtn); // asc

    const ratingCells = screen
      .getAllByText(/^([1-9]|10)$/)
      .filter((el) => el.closest("td"));

    const ratings = ratingCells.map((el) => parseInt(el.textContent, 10));

    for (let i = 1; i < ratings.length; i++) {
      expect(ratings[i]).toBeGreaterThanOrEqual(ratings[i - 1]);
    }
  });
});
