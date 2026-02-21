import React from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

interface ProvidersOptions extends Omit<RenderOptions, "wrapper"> {
  route?: string;
}

/**
 * Custom render that wraps component in ThemeProvider + MemoryRouter.
 * Accepts an optional `route` to set the initial URL.
 */
export function renderWithProviders(
  ui: React.ReactElement,
  { route = "/", ...options }: ProvidersOptions = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
      </ThemeProvider>
    );
  }

  return render(ui, { wrapper: Wrapper, ...options });
}
