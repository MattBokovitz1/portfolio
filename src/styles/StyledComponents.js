import styled from "styled-components";
import { Link } from "react-router-dom";

// Nav
export default {
  primaryColor: "#92817a",
};

export const Links = styled(Link)`
  text-decoration: none;
  color: #101010;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  &:hover {
    margin: 15% 0 10% 0;
    border-radius: 50%;
    border: 1px #f8f4ff;
    background: #f8f4ff;
    color: #101010;
    transition: opacity 300ms;
  }
`;

export const OutsideLinks = styled.a`
  text-decoration: none;
  color: #101010;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  &:hover {
    border: 1px #f8f4ff;
    margin: 15% 0 10% 0;
    border-radius: 50%;
    background: #f8f4ff;
    transition: opacity 300ms;
  }
`;

export const Description = styled.nav`
  text-align: left;
  font-family: "Oswald", sans-serif;
  padding: 0 0 0 10%;
  text-decoration: none;
`;

export const NameLink = styled(Link)`
  text-decoration: none;
  color: #101010;
`;

export const Name = styled.h1`
  font-size: 1.75rem;
  color: #101010;
`;

export const Role = styled.h2`
  font-size: 1.25rem;
  color: #101010;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  position: fixed;
  width: 95%;
  z-index: 100;
  font-family: "Oswald", sans-serif;
`;

export const LinksDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  font-size: 1rem;
  color: black;
  text-decoration: none;

  @media (max-width: 500px) {
    width: 50%;
  }
`;

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: Blue;
  padding: 10%;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Tooltip = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: opacity 300ms;
  justify-content: center;
`;

export const TooltipIcon = styled.div`
  transform: rotate(270deg);
`;

export const TooltipText = styled.div`
  font-size: 1.25rem;
  font-family: "Oswald", sans-serif;
`;

export const AboutSection = styled.div``;

export const About = styled.h2`
  padding: 15% 0 5% 0;
  font-family: "Oswald", sans-serif;
`;

export const MattSection = styled.div`
  display: flex;
  margin: 0 10% 0 10%;
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 275px;
  justify-content: space-evenly;
`;

export const Bio = styled.p`
  justify-content: space-evenly;
  margin: 5% 0 0 10%;
  font-family: "Oswald", sans-serif;
  font-size: 1.3rem;
`;

export const Logo = styled.div`
  display: flex;
  width: 15%;
`;

// SignUp

export const Header = styled.h2`
  font-size: 3rem;
  margin-bottom: 3%;
  padding: 0% 0% 1% 0%;
  color: #92817a;
`;

export const Input = styled.input`
  font-size: 1rem;
  margin: 0.5% 0% 0.5% 0%;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Footers = styled.div`
  position: fixed;
  background: black;
  z-index: 100;
  margin: 30% 20% 0 0;
`;

// Login

export const Button = styled.button`
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 0 0.1em 2.1em 0;
  border: 0.16em solid rgba(255, 255, 255, 0);
  border-radius: 2em;
  font-size: 1rem;
  box-sizing: border-box;
  text-decoration: none;
  color: #ffffff;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;
  background: #8db596;
`;

export const Quote = styled.div`
  width: 50%;
  margin: 5% 30% 0 25%;
  text-align: center;
  @media (max-width: 500px) {
    display: none;
  }
`;

// MyPlants

export const H3 = styled.h3`
  font-size: 2rem;
  color: white;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  color: white;
  padding: 0% 1% 0 0.5%;
`;

export const StyledPage = styled.div`
  position: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 100%;
  margin: 5% 0 0 0;
`;

export const StyledHeader = styled.h1`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  padding-right: 1rem;
  align-items: center;
  color: white;
  margin-left: 20%;
  font-size: 1.7rem;
  font-weight: 450;
  justify-items: center;
  margin-top: 15%;
  width: 75%;
`;

export const Span = styled.span`
  font-weight: bolder;
  color: white;
  border-bottom: 2px solid white;
`;
