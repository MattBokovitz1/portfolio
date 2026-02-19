import React from "react";
import styled, { keyframes } from "styled-components";
import { media } from "../../styles/theme";
import { Container } from "../../styles/shared";
import RoseWindow from "./RoseWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowDown } from "@fortawesome/free-solid-svg-icons";

/* ────────────────────────── Animations ────────────────────────── */

const twinkle = keyframes`
  0%, 100% { opacity: 0.15; }
  50% { opacity: 0.6; }
`;

const gentleDrift = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

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

  /* Celestial vault — layered radial glows evoking the Empyrean */
  &::before {
    content: '';
    position: absolute;
    top: -20%;
    left: 50%;
    transform: translateX(-50%);
    width: 1200px;
    height: 1200px;
    background:
      radial-gradient(circle at 50% 40%, rgba(197, 160, 68, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 50% 60%, rgba(59, 109, 181, 0.04) 0%, transparent 40%),
      radial-gradient(circle at 50% 50%, rgba(240, 225, 168, 0.03) 0%, transparent 60%);
    pointer-events: none;
  }

  /* Bottom gold rule — the threshold between heaven and earth */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(197, 160, 68, 0.08) 15%,
      rgba(197, 160, 68, 0.35) 50%,
      rgba(197, 160, 68, 0.08) 85%,
      transparent 100%
    );
  }
`;

/* Celestial star field */
const StarField = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
`;

const Star = styled.div`
  position: absolute;
  width: ${({ $size }) => $size || 2}px;
  height: ${({ $size }) => $size || 2}px;
  background: ${({ $color }) => $color || '#f5e6b8'};
  border-radius: 50%;
  animation: ${twinkle} ${({ $duration }) => $duration || '4s'} ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || '0s'};
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
`;

/* Star data — positioned to feel like a celestial vault */
const STARS = [
  { top: '8%', left: '12%', size: 2, duration: '5s', delay: '0s', color: '#f5e6b8' },
  { top: '15%', left: '78%', size: 1.5, duration: '4s', delay: '1.2s', color: '#dac278' },
  { top: '22%', left: '35%', size: 1, duration: '6s', delay: '0.5s', color: '#f5e6b8' },
  { top: '5%', left: '62%', size: 2.5, duration: '5.5s', delay: '2s', color: '#f0e1a8' },
  { top: '30%', left: '88%', size: 1.5, duration: '4.5s', delay: '0.8s', color: '#dac278' },
  { top: '65%', left: '5%', size: 1, duration: '7s', delay: '1.5s', color: '#f5e6b8' },
  { top: '72%', left: '92%', size: 2, duration: '5s', delay: '3s', color: '#c5a044' },
  { top: '85%', left: '25%', size: 1.5, duration: '6s', delay: '0.3s', color: '#f0e1a8' },
  { top: '12%', left: '48%', size: 1, duration: '4s', delay: '2.5s', color: '#dac278' },
  { top: '45%', left: '95%', size: 2, duration: '5.5s', delay: '1s', color: '#f5e6b8' },
  { top: '55%', left: '8%', size: 1.5, duration: '6.5s', delay: '0.7s', color: '#c5a044' },
  { top: '38%', left: '18%', size: 1, duration: '4.5s', delay: '2.2s', color: '#f5e6b8' },
  { top: '92%', left: '70%', size: 2, duration: '5s', delay: '1.8s', color: '#dac278' },
  { top: '78%', left: '55%', size: 1.5, duration: '7s', delay: '0.4s', color: '#f0e1a8' },
];

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
  animation: ${fadeInUp} 1.2s ease-out both;

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
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-bottom: -${({ theme }) => theme.spacing[2]};
  animation: ${fadeInUp} 0.8s ease-out 0.3s both;

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
  letter-spacing: -0.01em;
  animation: ${fadeInUp} 0.8s ease-out 0.5s both;

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
  animation: ${fadeInUp} 0.8s ease-out 0.7s both;
  font-style: italic;

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    padding: 0;
  }

  ${media.lg} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

/* ────────────────── Ornamental Divider ────────────────── */

const OrnamentDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  max-width: 280px;
  animation: ${fadeInUp} 0.8s ease-out 0.8s both;

  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(
      ${({ $direction }) => $direction === 'right' ? '90deg' : '270deg'},
      rgba(197, 160, 68, 0.35),
      transparent
    );
  }

  &::before {
    background: linear-gradient(270deg, rgba(197, 160, 68, 0.35), transparent);
  }
  &::after {
    background: linear-gradient(90deg, rgba(197, 160, 68, 0.35), transparent);
  }
`;

const OrnamentGlyph = styled.span`
  color: ${({ theme }) => theme.colors.gold};
  font-size: 0.7rem;
  opacity: 0.5;
  letter-spacing: 0.3em;
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
  animation: ${fadeInUp} 0.8s ease-out 0.9s both;

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
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors.goldDark});
  color: ${({ theme }) => theme.colors.navy};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border-radius: ${({ theme }) => theme.radii.md};
  text-decoration: none;
  letter-spacing: 0.03em;
  transition: all ${({ theme }) => theme.transitions.fast};
  flex: 1;
  min-width: 0;

  ${media.sm} {
    flex: 0 0 auto;
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[8]}`};
  }

  &:hover {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.goldLight}, ${({ theme }) => theme.colors.gold});
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(197, 160, 68, 0.35);
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
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(197, 160, 68, 0.12);
  }
`;

/* ────────────────── Social Links ────────────────── */

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[1]};
  animation: ${fadeInUp} 0.8s ease-out 1s both;

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
    box-shadow: 0 0 16px rgba(197, 160, 68, 0.15);
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
  animation: ${gentleDrift} 2.5s ease-in-out infinite;

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
  animation: ${fadeInUp} 0.8s ease-out 0.85s both;

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
  box-shadow: 0 0 6px ${({ $color }) => $color}60;
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
      <StarField>
        {STARS.map((s, i) => (
          <Star key={i}
            $top={s.top} $left={s.left} $size={s.size}
            $duration={s.duration} $delay={s.delay} $color={s.color}
          />
        ))}
      </StarField>

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

        <OrnamentDivider>
          <OrnamentGlyph>✦</OrnamentGlyph>
        </OrnamentDivider>

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
