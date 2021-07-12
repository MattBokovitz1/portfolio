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
  @media (max-width: 650px) {
    font-size: 1.2rem;
  }
`;

export const Role = styled.h2`
  font-size: 1.2rem;
  padding: 2% 0 0 0;
  color: #101010;
  @media (max-width: 650px) {
    font-size: 1rem;
  }
`;

export const Nav = styled.nav`
  margin: 3% 0 3% 0;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  width: 100%;
  z-index: 100;
  line-height: 1.5;
  font-family: "PT Sans Narrow", sans-serif;
  @media (max-width: 500px) {
    padding: 5% 0 0 5%;
  }
`;

export const LinksDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 32%;
  font-size: 1rem;
  color: black;
  text-decoration: none;
  padding: 0 5% 0 30%;
  @media (max-width: 500px) {
    padding: 0 5% 0 0;
  }
`;

export const FrontPicture = styled.img`
  padding: 0 0 0 0;
  width: 100%;
  height: 70vh;
  @media (max-width: 1000px) {
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
  background: #f8f8ff;
  padding: 5% 10% 0 10%;
`;

export const Matt = styled.h2`
  width: 100%;
  padding: 3% 0 3% 0;
  font-size: 3rem;
  font-family: "PT Sans Narrow", sans-serif;
  font-weight: normal;
  color: #101010;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const MattSection = styled.div`
  display: flex;
  padding: 3% 0 5% 5%;

  @media (max-width: 1000px) {
    display: block;
    border-bottom: 1px solid black;
    padding: 0 0 15% 0;
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
  width: 40%;
  height: 400px;
  /* width: 375px; */
  justify-content: space-evenly;

  @media (max-width: 1000px) {
    width: 40%;
    height: 40%;
    justify-content: center;
  }
  @media (max-width: 650px) {
    width: 90%;
    height: 30%;
    border-radius: 10%;
    margin: 5% 0 0 0;
  }
`;

export const Bio = styled.p`
  justify-content: space-evenly;
  margin: 2% 5% 0 10%;
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 1.3rem;
  color: #101010;
  text-align: left;
  line-height: 1.4;

  @media (max-width: 800px) {
    margin: 5% 0 0 0;
  }
  @media (max-width: 500px) {
    font-size: 1.1rem;
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
  @media (max-width: 800px) {
    padding: 5% 0 3% 0;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

export const ProjectTitle = styled.h3`
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.5;
  color: #101010;
  @media (max-width: 500px) {
    padding: 1% 0 0 0;
    font-size: 1.5rem;
    text-align: left;
  }
`;

export const ProjectDescription = styled.p`
  margin: 3% 0 3% 0;

  font-family: "PT Sans Narrow", sans-serif;
  font-size: 1.3rem;
  color: #101010;
  line-height: 1.4;
  @media (max-width: 500px) {
    font-size: 1.1rem;
    text-align: left;
  }
`;

export const ProjectLinks = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border: 1px solid #101010;
  margin: 0 28% 4% 28%;
  background: #101010;
  border-radius: 5%;
  @media (max-width: 1150px) {
    margin: 0 15% 4% 15%;
  }

  @media (max-width: 800px) {
    margin: 0 25% 4% 25%;
  }

  @media (max-width: 500px) {
    margin: 0 20% 4% 20%;
  }
`;

export const WhiteFont = styled.p`
  color: #f8f8ff;
`;

export const Arrow = styled.a`
  text-decoration: none;
  color: #101010;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const IndividualProject = styled.div`
  display: flex;
  padding: 0 0 20% 0%;
  border-bottom: 1px black;
  @media (max-width: 1000px) {
    display: block;
    padding: 10% 0 15% 0;
    border-bottom: 1px solid black;
  }
  @media (max-width: 600px) {
    padding: 20% 0 25% 0;
  }
`;

export const LeftProject = styled.div`
  justify-content: space-evenly;
  margin: 0 10% 0 0;
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 1.3rem;
  text-align: left;
  color: #101010;
  width: 100%;
  @media (max-width: 500px) {
    margin: 0;
    text-align: center;
  }
`;

export const ProjectImg = styled.img`
  justify-content: space-evenly;
  align-content: center;
  float: left;
  width: 100%;
  height: 350px;
  overflow: hidden;

  @media (max-width: 1000px) {
    padding: 5% 0;
    width: 70%;
    height: auto;
    overflow: none;
    float: none;
  }
  @media (max-width: 500px) {
    width: 100%;
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

export const Sailboat = styled.img`
  width: 100%;
  height: 400px;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Bottom = styled.div`
  padding: 10% 0 0 0;
  font-size: 2rem;
  font-family: "PT Sans Narrow", sans-serif;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
