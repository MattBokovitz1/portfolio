import React from "react";
import styled from "styled-components";
import { media } from "../../styles/theme";
import { Container, SectionTitle } from "../../styles/shared";
import essays from "../../data/essays";

const EssaysWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing[12]} 0;
  background: ${({ theme }) => theme.colors.cream};
  min-height: 60vh;
  position: relative;

  ${media.md} {
    padding: ${({ theme }) => theme.spacing[20]} 0;
  }

  /* Subtle parchment texture */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 80px,
      rgba(26, 26, 62, 0.012) 80px,
      rgba(26, 26, 62, 0.012) 81px
    );
    pointer-events: none;
  }
`;

const EssayList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
  max-width: 720px;
`;

const EssayCard = styled.article`
  padding-bottom: ${({ theme }) => theme.spacing[8]};
  position: relative;

  /* Ornamental divider between essays */
  &:not(:last-child)::after {
    content: '✦  ·  ✦';
    display: block;
    text-align: center;
    font-size: 0.6rem;
    color: ${({ theme }) => theme.colors.gold};
    opacity: 0.4;
    padding-top: ${({ theme }) => theme.spacing[8]};
    letter-spacing: 0.3em;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

const EssayTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  line-height: ${({ theme }) => theme.lineHeights.tight};
`;

const EssayBody = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};

  ${media.md} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  /* Illuminated drop cap for the first letter */
  &::first-letter {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 3.2em;
    float: left;
    line-height: 0.8;
    margin-right: 0.08em;
    margin-top: 0.05em;
    color: ${({ theme }) => theme.colors.navy};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

const EssayImage = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-top: ${({ theme }) => theme.spacing[5]};
  box-shadow: 0 8px 24px rgba(26, 26, 62, 0.08);
`;

const EssayDate = styled.span`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  text-transform: uppercase;
  letter-spacing: 0.12em;
`;

const EmptyState = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  font-style: italic;
  text-align: center;
  padding: ${({ theme }) => theme.spacing[12]} 0;
`;

function Essays() {
  return (
    <EssaysWrapper>
      <Container>
        <SectionTitle>Essays</SectionTitle>
        <EssayList>
          {essays.length > 0 ? (
            essays.map((essay) => (
              <EssayCard key={essay.id}>
                {essay.date && <EssayDate>{essay.date}</EssayDate>}
                <EssayTitle>{essay.title}</EssayTitle>
                <EssayBody>{essay.body}</EssayBody>
                {essay.image && (
                  <EssayImage src={essay.image} alt={essay.title} />
                )}
              </EssayCard>
            ))
          ) : (
            <EmptyState>Essays coming soon.</EmptyState>
          )}
        </EssayList>
      </Container>
    </EssaysWrapper>
  );
}

export default Essays;
