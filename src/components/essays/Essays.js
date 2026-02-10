import React from "react";
import styled from "styled-components";
import { media } from "../../styles/theme";
import { Container, SectionTitle } from "../../styles/shared";
import essays from "../../data/essays";

const EssaysWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing[12]} 0;
  background: ${({ theme }) => theme.colors.cream};
  min-height: 60vh;

  ${media.md} {
    padding: ${({ theme }) => theme.spacing[20]} 0;
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.stone200};

  &:last-child {
    border-bottom: none;
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
`;

const EssayImage = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-top: ${({ theme }) => theme.spacing[5]};
`;

const EssayDate = styled.span`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const EmptyState = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
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
