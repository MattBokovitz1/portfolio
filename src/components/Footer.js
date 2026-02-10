import React from "react";
import styled from "styled-components";
import { media } from "../styles/theme";
import { Container } from "../styles/shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.navyDeep};
  color: ${({ theme }) => theme.colors.stone400};
  padding: ${({ theme }) => theme.spacing[12]} 0 ${({ theme }) => theme.spacing[8]};
  position: relative;

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
      ${({ theme }) => theme.colors.gold}40 50%,
      transparent 100%
    );
  }
`;

const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]};

  ${media.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.stone500};
  text-align: center;

  ${media.md} {
    text-align: left;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  color: ${({ theme }) => theme.colors.stone500};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 1rem;
  transition: all ${({ theme }) => theme.transitions.fast};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
    background: rgba(197, 160, 68, 0.1);
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterText>
          &copy; {new Date().getFullYear()} Matt Bokovitz. Built with React.
        </FooterText>
        <FooterLinks>
          <FooterLink
            href="https://github.com/MattBokovitz1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </FooterLink>
          <FooterLink
            href="https://twitter.com/matt_bokovitz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
          >
            <FontAwesomeIcon icon={faSquareXTwitter} />
          </FooterLink>
          <FooterLink
            href="mailto:matt.bokovitz1@gmail.com?subject=re: Portfolio"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </FooterLink>
        </FooterLinks>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;
