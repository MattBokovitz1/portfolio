import React from "react";
import styled from "styled-components";
import { media } from "../../styles/theme";
import { Container } from "../../styles/shared";
import RoseWindow from "./RoseWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowDown } from "@fortawesome/free-solid-svg-icons";

/* ────────────────────────── Hero Section ────────────────────────── */

const HeroSection = styled.section`
  background: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.cream};
  position: relative;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing[12]} 0 ${({ theme }) => theme.spacing[10]};

  ${media.md} {
    padding: ${({ theme }) => theme.spacing[16]} 0 ${({ theme }) => theme.spacing[12]};
  }

  ${media.lg} {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing[12]} 0 ${({ theme }) => theme.spacing[16]};
  }

  /* Subtle radial glow behind content */
  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 800px;
    background: radial-gradient(
      circle,
      rgba(197, 160, 68, 0.05) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  /* Bottom gold rule */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(197, 160, 68, 0.25) 50%,
      transparent 100%
    );
  }
`;

const HeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing[5]};
  position: relative;
  z-index: 1;

  ${media.md} {
    gap: ${({ theme }) => theme.spacing[6]};
  }

  ${media.lg} {
    gap: ${({ theme }) => theme.spacing[10]};
  }
`;

/* ────────────────── Rose Window ────────────────── */

const RoseWindowWrapper = styled.div`
  width: 180px;
  height: 180px;

  ${media.sm} {
    width: 220px;
    height: 220px;
  }

  ${media.md} {
    width: 280px;
    height: 280px;
  }

  ${media.lg} {
    width: 360px;
    height: 360px;
  }
`;

/* ────────────────── Typography ────────────────── */

const Greeting = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.goldLight};
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: -${({ theme }) => theme.spacing[2]};

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.cream};
  line-height: 1.05;
  letter-spacing: -0.02em;

  ${media.sm} {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
  }

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes['6xl']};
  }

  ${media.lg} {
    font-size: ${({ theme }) => theme.fontSizes['7xl']};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.stone300};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  max-width: 520px;
  padding: 0 ${({ theme }) => theme.spacing[2]};

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    padding: 0;
  }

  ${media.lg} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

/* ────────────────── CTA Row ────────────────── */

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing[4]};

  ${media.sm} {
    width: auto;
    padding: 0;
    gap: ${({ theme }) => theme.spacing[4]};
  }
`;

const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
  background: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.navy};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border-radius: ${({ theme }) => theme.radii.md};
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: all ${({ theme }) => theme.transitions.fast};
  flex: 1;
  min-width: 0;

  ${media.sm} {
    flex: 0 0 auto;
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[8]}`};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.goldDark};
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(197, 160, 68, 0.3);
  }
`;

const SecondaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
  color: ${({ theme }) => theme.colors.stone300};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border: 1px solid rgba(197, 160, 68, 0.3);
  border-radius: ${({ theme }) => theme.radii.md};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};
  flex: 1;
  min-width: 0;

  ${media.sm} {
    flex: 0 0 auto;
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[8]}`};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.cream};
    transform: translateY(-1px);
  }
`;

/* ────────────────── Social Links ────────────────── */

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[1]};

  ${media.md} {
    gap: ${({ theme }) => theme.spacing[3]};
    margin-top: ${({ theme }) => theme.spacing[2]};
  }

  ${media.lg} {
    margin-top: ${({ theme }) => theme.spacing[4]};
    margin-bottom: ${({ theme }) => theme.spacing[6]};
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  color: ${({ theme }) => theme.colors.stone400};
  border: 1px solid rgba(197, 160, 68, 0.15);
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 1rem;
  transition: all ${({ theme }) => theme.transitions.fast};
  text-decoration: none;

  ${media.md} {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.125rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
    border-color: ${({ theme }) => theme.colors.gold};
    background: rgba(197, 160, 68, 0.08);
  }
`;

/* ────────────────── Scroll Indicator ────────────────── */

const ScrollIndicator = styled.div`
  display: none;
  position: absolute;
  bottom: ${({ theme }) => theme.spacing[4]};
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.gold};
  opacity: 0.4;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  animation: float 2s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(8px); }
  }

  ${media.lg} {
    display: block;
  }
`;

/* ────────────────── Legend (topic key) ────────────────── */

const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  max-width: 540px;
  padding: 0 ${({ theme }) => theme.spacing[2]};

  ${media.md} {
    gap: ${({ theme }) => theme.spacing[3]};
    padding: 0;
  }
`;

const LegendItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  color: ${({ theme }) => theme.colors.stone400};
  letter-spacing: 0.04em;
  text-transform: uppercase;

  ${media.sm} {
    font-size: 0.7rem;
    gap: 6px;
  }

  ${media.md} {
    font-size: 0.75rem;
  }
`;

const Swatch = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: ${({ $color }) => $color};
`;

const TOPICS = [
  { label: "Psychology", color: "#3b6db5" },
  { label: "Philosophy", color: "#c5a044" },
  { label: "Classics", color: "#b86b7a" },
  { label: "History", color: "#6b8f3e" },
  { label: "Religion", color: "#8854a0" },
  { label: "Science", color: "#d4763a" },
  { label: "Politics", color: "#4a9e9e" },
  { label: "Mathematics", color: "#c4545a" },
];

/* ────────────────── Component ────────────────── */

export default function HeroDisplay() {
  return (
    <HeroSection>
      <HeroContainer>
        <RoseWindowWrapper>
          <RoseWindow size={360} />
        </RoseWindowWrapper>

        <Greeting>Software Engineer &middot; Milwaukee, WI</Greeting>
        <HeroTitle>Matt Bokovitz</HeroTitle>
        <HeroSubtitle>
          Building thoughtful software, exploring the great ideas of faith,
          philosophy, and history, and sharing it all through writing.
        </HeroSubtitle>

        <Legend>
          {TOPICS.map((t) => (
            <LegendItem key={t.label}>
              <Swatch $color={t.color} />
              {t.label}
            </LegendItem>
          ))}
        </Legend>

        <Actions>
          <PrimaryBtn href="#about">
            About Me
            <FontAwesomeIcon icon={faArrowDown} size="sm" />
          </PrimaryBtn>
          <SecondaryBtn
            href="mailto:matt.bokovitz1@gmail.com?subject=re: Portfolio"
          >
            <FontAwesomeIcon icon={faEnvelope} size="sm" />
            Get in Touch
          </SecondaryBtn>
        </Actions>

        <SocialRow>
          <SocialLink
            href="https://github.com/MattBokovitz1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </SocialLink>
          <SocialLink
            href="https://twitter.com/matt_bokovitz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
          >
            <FontAwesomeIcon icon={faSquareXTwitter} />
          </SocialLink>
          <SocialLink
            href="mailto:matt.bokovitz1@gmail.com?subject=re: Portfolio"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </SocialLink>
        </SocialRow>
      </HeroContainer>

      <ScrollIndicator>
        <FontAwesomeIcon icon={faArrowDown} />
      </ScrollIndicator>
    </HeroSection>
  );
}
