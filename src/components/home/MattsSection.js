import React from "react";
import styled, { keyframes } from "styled-components";
import { media } from "../../styles/theme";
import { Container, SectionTitle } from "../../styles/shared";
import matt from "../../assets/Matt.jpg";

/* ────────────────── Animations ────────────────── */

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

/* ────────────────── Section / Layout ────────────────── */

const AboutWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing[12]} 0;
  background: ${({ theme }) => theme.colors.cream};
  position: relative;

  ${media.md} {
    padding: ${({ theme }) => theme.spacing[20]} 0;
  }

  /* Subtle stone texture overlay */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 120px,
      rgba(26, 26, 62, 0.015) 120px,
      rgba(26, 26, 62, 0.015) 121px
    );
    pointer-events: none;
  }
`;

const AboutLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};

  ${media.md} {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing[10]};
    align-items: flex-start;
  }

  ${media.lg} {
    gap: ${({ theme }) => theme.spacing[12]};
  }
`;

/* ────────────────── Photo with Gothic Arch Frame ────────────────── */

const PhotoColumn = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const PhotoFrame = styled.div`
  width: 180px;
  height: 180px;
  border-radius: ${({ theme }) => theme.radii['2xl']};
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.colors.gold};
  box-shadow:
    0 12px 32px rgba(26, 26, 62, 0.10),
    0 0 0 6px rgba(197, 160, 68, 0.06),
    0 0 60px rgba(197, 160, 68, 0.08);
  position: relative;

  ${media.md} {
    width: 220px;
    height: 220px;
  }

  ${media.lg} {
    width: 260px;
    height: 260px;
  }

  /* Shimmer highlight across frame */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      105deg,
      transparent 40%,
      rgba(197, 160, 68, 0.08) 45%,
      rgba(197, 160, 68, 0.12) 50%,
      rgba(197, 160, 68, 0.08) 55%,
      transparent 60%
    );
    background-size: 200% 100%;
    animation: ${shimmer} 8s ease-in-out infinite;
    pointer-events: none;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

/* ────────────────── Text Column ────────────────── */

const TextColumn = styled.div`
  flex: 1;
  text-align: center;

  ${media.md} {
    text-align: left;
  }
`;

const AboutText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-bottom: ${({ theme }) => theme.spacing[5]};
  }

  &:last-of-type {
    margin-bottom: ${({ theme }) => theme.spacing[6]};
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.navy};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

/* ────────────────── Ornamental Rule ────────────────── */

const OrnamentalRule = styled.div`
  width: 100%;
  max-width: 220px;
  height: 1px;
  margin: 0 auto ${({ theme }) => theme.spacing[6]};
  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.colors.gold}40,
    transparent
  );
  position: relative;

  ${media.md} {
    margin: 0 0 ${({ theme }) => theme.spacing[6]};
  }

  &::after {
    content: '✦';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.55rem;
    color: ${({ theme }) => theme.colors.gold};
    background: ${({ theme }) => theme.colors.cream};
    padding: 0 0.5rem;
    opacity: 0.6;
  }
`;

/* ────────────────── Tech Stack ────────────────── */

const TechTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gold};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  justify-content: center;

  ${media.md} {
    justify-content: flex-start;
  }
`;

const TechTag = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
  background: ${({ theme }) => theme.colors.ivory};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: ${({ theme }) => theme.fonts.mono};
  border: 1px solid ${({ theme }) => theme.colors.stone200};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.navy};
    box-shadow: 0 2px 12px rgba(197, 160, 68, 0.12);
  }
`;

export default function MattsSection() {
  const techStack = [
    "React.js",
    "Node.js",
    "TypeScript",
    "MySQL",
    "JavaScript",
    "CSS",
  ];

  return (
    <AboutWrapper id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <AboutLayout>
          <PhotoColumn>
            <PhotoFrame>
              <Photo src={matt} alt="Matt Bokovitz" width={520} height={520} loading="eager" fetchPriority="high" />
            </PhotoFrame>
          </PhotoColumn>

          <TextColumn>
            <AboutText>
              I'm a <Highlight>Software Engineer at Northwestern Mutual</Highlight> in
              Milwaukee, Wisconsin. I'm passionate about innovation and driven to
              help others through building thoughtful, well-crafted software.
            </AboutText>
            <AboutText>
              Beyond code, I love exploring the intersection of technology with
              {" "}<Highlight>philosophy, history, science, and the Catholic faith</Highlight>.
              This site is also my space to share writing about the great ideas
              that shape how I see the world.
            </AboutText>
            <OrnamentalRule />
            <TechTitle>Tech I work with</TechTitle>
            <TechStack>
              {techStack.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </TechStack>
          </TextColumn>
        </AboutLayout>
      </Container>
    </AboutWrapper>
  );
}
