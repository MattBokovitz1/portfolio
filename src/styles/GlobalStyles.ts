import { createGlobalStyle } from 'styled-components';
import { media } from './theme';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    line-height: ${({ theme }) => theme.lineHeights.normal};
    text-rendering: optimizeLegibility;
  }

  /* Cathedral-themed scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.ivory};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.stone300};
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.colors.ivory};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.gold};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    line-height: ${({ theme }) => theme.lineHeights.tight};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.navy};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    ${media.lg} {
      font-size: ${({ theme }) => theme.fontSizes['5xl']};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    ${media.lg} {
      font-size: ${({ theme }) => theme.fontSizes['3xl']};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    ${media.lg} {
      font-size: ${({ theme }) => theme.fontSizes['2xl']};
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.navy};
  }

  /* Ornamental horizontal rule utility */
  .ornament {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.gold};

    &::before, &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: ${({ theme }) => theme.colors.stone200};
    }
  }

  /* Smooth reveal for sections entering viewport */
  @keyframes gentleRise {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default GlobalStyles;
