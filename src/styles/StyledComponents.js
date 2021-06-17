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
`;

export const OutsideLinks = styled.a`
  text-decoration: none;
  color: #101010;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const Description = styled.nav`
  text-align: left;
  font-family: "PT Sans Narrow", sans-serif;
  padding: 0 0 0 12.5%;
  text-decoration: none;
`;

export const NameLink = styled(Link)`
  text-decoration: none;
  color: #101010;
`;

export const Name = styled.h1`
  font-size: 1.7rem;
  color: #101010;
`;

export const Role = styled.h2`
  font-size: 1.2rem;
  color: #101010;
`;

export const Nav = styled.nav`
  margin: 0;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  /* position: fixed; */
  width: 100%;
  z-index: 100;
  font-family: "PT Sans Narrow", sans-serif;
  /* background: #f8f8ff; */
`;

export const LinksDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 32%;
  font-size: 1rem;
  color: black;
  text-decoration: none;
  padding: 0 5% 0 30%;
`;

export const FrontPicture = styled.img`
  padding: 5% 0 3% 0;
  width: 75%;
  height: 60vh;
  @media (max-width: 800px) {
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

export const AboutSection = styled.div`
  background: linear-gradient(60deg, #f7e7ce 20%, #f8f8ff 30%);
  padding: 5% 10% 0 10%;
`;

export const Matt = styled.h2`
  width: 100%;
  padding: 0 0 3% 0;
  font-size: 3rem;
  font-family: "PT Sans Narrow", sans-serif;
  font-weight: normal;
  color: #101010;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const MattSection = styled.div`
  display: flex;
  padding: 0 0 5% 5%;
  border-bottom: 1px black;
  @media (max-width: 800px) {
    display: block;
    padding: 0;
  }
`;

export const BlogTitle = styled.h2`
  width: 100%;
  padding: 0 0 3% 0;
  font-size: 3rem;
  font-family: "PT Sans Narrow", sans-serif;
  font-weight: normal;
  color: #101010;
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 375px;
  justify-content: space-evenly;

  @media (max-width: 800px) {
    width: 40%;
    height: 40%;
    justify-content: center;
  }
  @media (max-width: 500px) {
    width: 90%;
    height: 30%;
    border-radius: 10%;
    margin: 5% 0 0 0;
  }
`;

export const Bio = styled.p`
  justify-content: space-evenly;
  margin: 5% 5% 0 10%;
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 1.3rem;
  color: #101010;
  text-align: left;
  @media (max-width: 800px) {
    margin: 5% 0 0 0;
    text-align: center;
  }
`;

export const ProjectsSection = styled.div`
  background: #f8f8ff;
  margin: 0 0 10% 0;
  @media (max-width: 500px) {
    display: block;
  }
`;

export const Projects = styled.h2`
  width: 100%;
  padding: 5% 0 8% 0;
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 3rem;
  font-weight: normal;
  color: #101010;
  @media (max-width: 500px) {
    margin: 5% 0 5% 0;
  }
`;

export const ProjectTitle = styled.h3`
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #101010;
`;

export const ProjectDescription = styled.p`
  margin: 5% 0 10% 0;
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 1.3rem;
  color: #101010;
`;

export const ProjectLinks = styled.a`
  text-decoration: none;
  color: #101010;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export const IndividualProject = styled.div`
  display: flex;
  padding: 0 0 20% 0%;
  border-bottom: 1px black;
  @media (max-width: 500px) {
    display: block;
  }
`;

export const LeftProject = styled.div`
  justify-content: space-evenly;
  margin: 5% 10% 0 0;
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 1.3rem;
  text-align: left;
  color: #101010;
  @media (max-width: 500px) {
    margin: 0;
    text-align: center;
  }
`;

export const ProjectImg = styled.img`
  width: 50%;
  justify-content: space-evenly;
  @media (max-width: 500px) {
    width: 80%;
  }
`;

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

export const Bottom = styled.div`
  padding: 10% 0 0 0;
  font-size: 2rem;
  font-family: "PT Sans Narrow", sans-serif;
  @media (max-width: 500px) {
    display: none;
  }
`;
