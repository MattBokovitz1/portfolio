import React from "react";
import styled from "styled-components";
import { media } from "../../styles/theme";
import { Container, SectionTitle } from "../../styles/shared";
import matt from "../../assets/Matt.png";

const AboutWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing[12]} 0;
  background: ${({ theme }) => theme.colors.cream};
  position: relative;

  ${media.md} {
    padding: ${({ theme }) => theme.spacing[20]} 0;
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
  box-shadow: 0 12px 32px rgba(26, 26, 62, 0.10);

  ${media.md} {
    width: 220px;
    height: 220px;
  }

  ${media.lg} {
    width: 260px;
    height: 260px;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

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
              <Photo src={matt} alt="Matt Bokovitz" />
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
