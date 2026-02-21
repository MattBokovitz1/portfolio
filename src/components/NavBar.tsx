import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { media } from "../styles/theme";
import { Container } from "../styles/shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const NavWrapper = styled.header<{ $scrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(253, 250, 245, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.stone200};
  transition: box-shadow ${({ theme }) => theme.transitions.normal};

  ${({ $scrolled }) =>
    $scrolled &&
    `box-shadow: 0 1px 4px rgba(44, 36, 32, 0.08);`}
`;

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;

  ${media.md} {
    height: 4.5rem;
  }
`;

const Brand = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  gap: 0.125rem;
`;

const BrandName = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.navy};
  letter-spacing: 0.01em;
`;

const BrandRole = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gold};
`;

const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};

  ${media.md} {
    display: flex;
  }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  text-decoration: none;
  letter-spacing: 0.02em;

  &:hover {
    color: ${({ theme }) => theme.colors.navy};
    background: ${({ theme }) => theme.colors.goldSubtle};
  }
`;

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  color: ${({ theme }) => theme.colors.stone400};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.lg};

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
    background: ${({ theme }) => theme.colors.goldSubtle};
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 1.5rem;
  background: ${({ theme }) => theme.colors.stone200};
  margin: 0 ${({ theme }) => theme.spacing[2]};
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.lg};
  font-size: 1.25rem;
  transition: background ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.stone100};
  }

  ${media.md} {
    display: none;
  }
`;

const MobileOverlay = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? "block" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1001;

  ${media.md} {
    display: none;
  }
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(80vw, 320px);
  background: ${({ theme }) => theme.colors.cream};
  z-index: 1002;
  padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[6]};
  display: flex;
  flex-direction: column;
  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(100%)")};
  transition: transform ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ $open }) => ($open ? "-4px 0 20px rgba(26, 26, 62, 0.12)" : "none")};
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  border-left: 3px solid ${({ theme }) => theme.colors.gold};

  ${media.md} {
    display: none;
  }
`;

const MobileCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  width: 2.75rem;
  height: 2.75rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  flex-shrink: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.stone100};
  }
`;

const MobileNavLink = styled(Link)<{ $active: boolean }>`
  display: block;
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[4]}`};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.35rem;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.navy};
  border-radius: ${({ theme }) => theme.radii.md};
  text-decoration: none;
  transition: background ${({ theme }) => theme.transitions.fast};
  line-height: 1.5;
  letter-spacing: 0.01em;

  &:hover {
    background: ${({ theme }) => theme.colors.goldSubtle};
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const MobileMenuLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.gold};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: ${({ theme }) => `${theme.spacing[6]} ${theme.spacing[4]} ${theme.spacing[2]}`};
`;

const MobileExternalLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing[6]};
  border-top: 1px solid ${({ theme }) => theme.colors.stone200};
`;

const MobileExternalLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  color: ${({ theme }) => theme.colors.stone500};
  border: 1px solid ${({ theme }) => theme.colors.stone200};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 1.125rem;
  transition: all ${({ theme }) => theme.transitions.fast};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
    border-color: ${({ theme }) => theme.colors.gold};
    background: ${({ theme }) => theme.colors.goldSubtle};
  }
`;

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <>
      <NavWrapper $scrolled={scrolled}>
        <NavContainer>
          <Brand to="/">
            <BrandName>Matt Bokovitz</BrandName>
            <BrandRole>Software Engineer</BrandRole>
          </Brand>

          <DesktopNav aria-label="Main navigation">
            <NavLink to="/" $active={isActive("/")}>
              Home
            </NavLink>
            <NavLink to="/essays" $active={isActive("/essays")}>
              Essays
            </NavLink>
            <NavLink to="/books" $active={isActive("/books")}>
              Books
            </NavLink>
            <Divider />
            <ExternalLink
              href="https://github.com/MattBokovitz1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </ExternalLink>
            <ExternalLink
              href="https://twitter.com/matt_bokovitz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <FontAwesomeIcon icon={faSquareXTwitter} />
            </ExternalLink>
            <ExternalLink
              href="mailto:matt.bokovitz1@gmail.com?subject=re: Portfolio"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </ExternalLink>
          </DesktopNav>

          <MobileMenuButton
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </MobileMenuButton>
        </NavContainer>
      </NavWrapper>

      <MobileOverlay $open={mobileOpen} onClick={() => setMobileOpen(false)} />
      <MobileMenu $open={mobileOpen} role="dialog" aria-label="Navigation menu">
        <MobileCloseButton
          onClick={() => setMobileOpen(false)}
          aria-label="Close navigation menu"
        >
          <FontAwesomeIcon icon={faTimes} />
        </MobileCloseButton>
        <MobileMenuLabel>Navigation</MobileMenuLabel>
        <MobileNavLink to="/" $active={isActive("/")}>
          Home
        </MobileNavLink>
        <MobileNavLink to="/essays" $active={isActive("/essays")}>
          Essays
        </MobileNavLink>
        <MobileNavLink to="/books" $active={isActive("/books")}>
          Books
        </MobileNavLink>
        <MobileMenuLabel>Connect</MobileMenuLabel>
        <MobileExternalLinks>
          <MobileExternalLink
            href="https://github.com/MattBokovitz1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </MobileExternalLink>
          <MobileExternalLink
            href="https://twitter.com/matt_bokovitz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
          >
            <FontAwesomeIcon icon={faSquareXTwitter} />
          </MobileExternalLink>
          <MobileExternalLink
            href="mailto:matt.bokovitz1@gmail.com?subject=re: Portfolio"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </MobileExternalLink>
        </MobileExternalLinks>
      </MobileMenu>
    </>
  );
}

export default NavBar;
