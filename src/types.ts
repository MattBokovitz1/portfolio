import "styled-components";

// Re-export the theme type so styled-components knows the shape
import theme from "./styles/theme";

type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

// ── Data types ──────────────────────────────────────────────────

export interface Book {
  id: number;
  title: string;
  author: string;
  date?: string;
  rating: string;
  topic: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  project_link?: string;
  github_link?: string;
  project_photo?: string;
}

export interface Essay {
  id: number;
  title: string;
  body: string;
  image?: string;
  date?: string;
}
