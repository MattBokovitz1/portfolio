// Cathedral-inspired design tokens
// Drawing from: Basilica of St. Josaphat's gold & mosaics,
// Chartres Cathedral's cobalt stained glass & rose windows,
// and the Duomo di Firenze's marble & terracotta warmth.

const theme = {
  // Colors
  colors: {
    // Primary — Chartres cobalt / stained-glass blue
    primary: '#1e3a6e',
    primaryDark: '#152c54',
    primaryLight: '#3b6db5',

    // Gold — St. Josaphat's gilded leaf
    gold: '#c5a044',
    goldLight: '#dac278',
    goldDark: '#a07e2c',
    goldSubtle: 'rgba(197, 160, 68, 0.12)',

    // Neutrals — warm stone tones inspired by Duomo marble
    white: '#fdfaf5',
    cream: '#f7f2ea',
    ivory: '#f0e9dd',
    stone100: '#e8dfd0',
    stone200: '#d6cab5',
    stone300: '#bfb09a',
    stone400: '#9c8c76',
    stone500: '#7a6c5a',
    stone600: '#5c5146',
    stone700: '#403832',
    stone800: '#2c2420',
    stone900: '#1a1612',

    // Deep cathedral darks — vaulted ceiling / night sky
    navy: '#1a1a3e',
    navyLight: '#252552',
    navyDeep: '#0f0f2a',

    // Accent — burgundy / wine from stained glass
    burgundy: '#6b2d3e',
    burgundyLight: '#8e4456',
    rose: '#b86b7a',

    // Semantic
    text: '#2c2420',
    textSecondary: '#5c5146',
    textMuted: '#9c8c76',
    textOnDark: '#f0e9dd',
    textOnDarkMuted: '#bfb09a',
    background: '#fdfaf5',
    backgroundAlt: '#f7f2ea',
    border: '#e8dfd0',
    borderLight: '#f0e9dd',

    // Legacy compatibility aliases
    gray50: '#f7f2ea',
    gray100: '#f0e9dd',
    gray200: '#e8dfd0',
    gray300: '#d6cab5',
    gray400: '#9c8c76',
    gray500: '#7a6c5a',
    gray600: '#5c5146',
    gray700: '#403832',
    gray800: '#2c2420',
    gray900: '#1a1612',
    black: '#0d0b09',
    accent: '#6b2d3e',
    accentLight: '#8e4456',
  },

  // Typography
  fonts: {
    heading: "'Cormorant Garamond', 'Georgia', 'Times New Roman', serif",
    body: "'Crimson Pro', 'Georgia', serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },

  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
  },

  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeights: {
    tight: 1.2,
    normal: 1.6,
    relaxed: 1.8,
  },

  // Spacing (based on 4px grid)
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Border radius
  radii: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },

  // Shadows — warm tinted
  shadows: {
    sm: '0 1px 2px rgba(44, 36, 32, 0.06)',
    md: '0 4px 6px -1px rgba(44, 36, 32, 0.08), 0 2px 4px -2px rgba(44, 36, 32, 0.06)',
    lg: '0 10px 15px -3px rgba(44, 36, 32, 0.08), 0 4px 6px -4px rgba(44, 36, 32, 0.04)',
    xl: '0 20px 25px -5px rgba(44, 36, 32, 0.1), 0 8px 10px -6px rgba(44, 36, 32, 0.06)',
    gold: '0 4px 14px rgba(197, 160, 68, 0.2)',
  },

  // Transitions
  transitions: {
    fast: '150ms ease',
    normal: '250ms ease',
    slow: '400ms ease',
  },

  // Layout
  maxWidth: '1200px',
  containerPadding: '1.5rem',
};

// Media query helpers
export const media = {
  sm: `@media (min-width: ${theme.breakpoints.sm})`,
  md: `@media (min-width: ${theme.breakpoints.md})`,
  lg: `@media (min-width: ${theme.breakpoints.lg})`,
  xl: `@media (min-width: ${theme.breakpoints.xl})`,
  '2xl': `@media (min-width: ${theme.breakpoints['2xl']})`,
};

export default theme;
