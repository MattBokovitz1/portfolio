import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

/**
 * Custom render that wraps component in ThemeProvider + MemoryRouter.
 * Accepts an optional `route` to set the initial URL.
 */
export function renderWithProviders(ui, { route = "/", ...options } = {}) {
  function Wrapper({ children }) {
    return (
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
      </ThemeProvider>
    );
  }

  return render(ui, { wrapper: Wrapper, ...options });
}
