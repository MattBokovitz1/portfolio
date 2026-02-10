import React from "react";
import styled from "styled-components";
import { media } from "../../styles/theme";
import { Container, SectionTitle, Card, ButtonPrimary, ButtonOutline } from "../../styles/shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projectsData from "../../data/projects";

const ProjectsWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing[12]} 0;
  background: ${({ theme }) => theme.colors.navy};
  position: relative;

  /* Gold rule top */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(197, 160, 68, 0.2) 50%,
      transparent 100%
    );
  }

  ${media.md} {
    padding: ${({ theme }) => theme.spacing[20]} 0;
  }
`;

const DarkSectionTitle = styled(SectionTitle)`
  color: ${({ theme }) => theme.colors.cream};

  &::after {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing[8]};
  }
`;

const ProjectCard = styled(Card)`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.navyLight};
  border-color: rgba(197, 160, 68, 0.12);

  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.navy};

  ${media.md} {
    height: 220px;
    margin-bottom: ${({ theme }) => theme.spacing[5]};
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.slow};

  ${ProjectCard}:hover & {
    transform: scale(1.03);
  }
`;

const ProjectTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.cream};
  margin-bottom: ${({ theme }) => theme.spacing[2]};

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: ${({ theme }) => theme.spacing[3]};
  }
`;

const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.stone300};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  flex: 1;

  ${media.md} {
    margin-bottom: ${({ theme }) => theme.spacing[5]};
  }
`;

const ProjectActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  flex-wrap: wrap;

  ${media.sm} {
    gap: ${({ theme }) => theme.spacing[3]};
  }

  /* Override button styles for dark background */
  ${ButtonPrimary} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};

    ${media.sm} {
      font-size: ${({ theme }) => theme.fontSizes.base};
      padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
    }
  }

  ${ButtonOutline} {
    color: ${({ theme }) => theme.colors.cream};
    border-color: rgba(197, 160, 68, 0.35);
    font-size: ${({ theme }) => theme.fontSizes.sm};
    padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};

    ${media.sm} {
      font-size: ${({ theme }) => theme.fontSizes.base};
      padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
    }

    &:hover {
      border-color: ${({ theme }) => theme.colors.gold};
      color: ${({ theme }) => theme.colors.gold};
      background: rgba(197, 160, 68, 0.1);
    }
  }
`;

export default function Projects() {
  return (
    <ProjectsWrapper>
      <Container>
        <DarkSectionTitle>Projects</DarkSectionTitle>
        <ProjectsGrid>
          {projectsData.map((project) => (
            <ProjectCard key={project.id}>
              {project.project_photo && (
                <ProjectImageWrapper>
                  <ProjectImage
                    src={project.project_photo}
                    alt={project.title}
                  />
                </ProjectImageWrapper>
              )}
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectActions>
                {project.project_link && (
                  <ButtonPrimary
                    href={project.project_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                    Live Demo
                  </ButtonPrimary>
                )}
                {project.github_link && (
                  <ButtonOutline
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                    Source Code
                  </ButtonOutline>
                )}
              </ProjectActions>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsWrapper>
  );
}
