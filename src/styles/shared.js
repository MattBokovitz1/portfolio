import styled from 'styled-components';
import { media } from './theme';

// Reusable container with max-width and responsive padding
export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.containerPadding};

  ${media.md} {
    padding: 0 2rem;
  }

  ${media.lg} {
    padding: 0 3rem;
  }
`;

// Section wrapper with consistent vertical spacing
export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing[16]} 0;

  ${media.md} {
    padding: ${({ theme }) => theme.spacing[20]} 0;
  }

  ${media.lg} {
    padding: ${({ theme }) => theme.spacing[24]} 0;
  }
`;

// Section title
export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  position: relative;
  letter-spacing: 0.01em;

  &::after {
    content: '\u2726';
    display: block;
    color: ${({ theme }) => theme.colors.gold};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-top: ${({ theme }) => theme.spacing[3]};
    letter-spacing: 0.3em;
  }

  ${media.md} {
    margin-bottom: ${({ theme }) => theme.spacing[12]};
  }
`;

// Card component
export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.stone200};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing[6]};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.gold};
    transform: translateY(-2px);
  }

  ${media.md} {
    padding: ${({ theme }) => theme.spacing[8]};
  }
`;

// Badge/Tag component
export const Badge = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
  background: ${({ theme }) => theme.colors.gray100};
  color: ${({ theme }) => theme.colors.gray600};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.full};
  letter-spacing: 0.025em;
  text-transform: uppercase;
`;

// Button styles
export const ButtonPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[5]}`};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.cream};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 0.02em;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ButtonOutline = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[5]}`};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  border: 1px solid ${({ theme }) => theme.colors.stone200};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 0.02em;

  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.goldSubtle};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

// Visually hidden for accessibility
export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
