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
  @media (max-width: 850px) {
    display: none;
  }
`;

export const OutsideLinks = styled.a`
  text-decoration: none;
  color: #101010;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  @media (max-width: 850px) {
    display: none;
  }
`;

export const Description = styled.nav`
  text-align: left;
  font-family: "Roboto Mono", monospace;
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
  font-family: "Roboto Mono", monospace;
  @media (max-width: 500px) {
    padding: 5% 0 5% 0;
  }
`;

export const LinksDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
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
  @media (max-width: 850px) {
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
  font-family: "Roboto Mono", monospace;
`;

export const AboutSection = styled.div`
  background: #f8f8ff;
  padding: 5% 10% 0 10%;
`;

export const Matt = styled.h2`
  width: 100%;
  padding: 3% 0 3% 0;
  font-size: 2rem;
  font-family: "Roboto Mono", monospace;
  font-weight: normal;
  color: #101010;
  @media (max-width: 1050px) {
    display: none;
  }
`;

export const MattSection = styled.div`
  display: flex;
  padding: 3% 0 5% 5%;
  border-bottom: 1px solid black;

  @media (max-width: 1050px) {
    display: block;
    padding: 0 0 15% 0;
  }
`;

export const EssayTitle = styled.h2`
  width: 100%;
  padding: 0 0 3% 0;
  font-size: 3rem;
  font-family: "Roboto Mono", monospace;
  font-weight: normal;
  color: #101010;
`;

export const EssaySubtitle = styled.h3`
  width: 100%;
  padding: 0 0 3% 0;
  font-size: 2rem;
  font-family: "Roboto Mono", monospace;
  font-weight: normal;
  color: #101010;
`;

export const EssayBody = styled.p`
  padding: 0 10% 3% 10%;
  font-size: 1.25rem;
  font-family: "Roboto Mono", monospace;
  font-weight: normal;
  color: #101010;
`;

export const EssaySection2 = styled.div`
  width: 100%;
  padding: 3% 0 5% 5%;
  border-bottom: 1px solid black;
`;

export const EssaySection = styled.div`
  width: 100%;
  padding: 3% 0 5% 5%;
`;

export const Essay = styled.div`
  width: 100%;
  padding: 0 0 3% 0;
  font-size: 1.5rem;
  font-family: "Roboto Mono", monospace;
  font-weight: normal;
  color: #101010;
`;

export const ProfilePicture = styled.img`
  width: 30vw;
  height: 40vh;
  justify-content: space-between;
  vertical-align: middle;

  @media (max-width: 1000px) {
    width: 60%;
    height: 20%;
    padding: 0 0 5% 0;
    justify-content: space-evenly;
  }
  @media (max-width: 850px) {
    width: 70%;
    height: 30%;
    border-radius: 10%;
    margin: 5% 0 0 0;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const SmallProfile = styled.img`
  width: 90%;
  justify-content: space-evenly;
  vertical-align: middle;
  height: 30%;
  border-radius: 10%;
  margin: 5% 0 0 0;
  @media (min-width: 501px) {
    display: none;
  }
`;

export const Bio = styled.p`
  justify-content: space-evenly;
  margin: 2% 5% 0 10%;
  font-family: "Roboto Mono", monospace;
  color: #101010;
  text-align: left;
  line-height: 1.4;

  @media (min-width: 1600px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1100px) {
    font-size: 1.1rem;
  }
  @media (max-width: 1000px) {
    font-size: .9rem;

  @media (max-width: 800px) {
    margin: 5% 0 0 0;
  }
  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

export const Projects = styled.h2`
  width: 100%;
  padding: 10% 0 8% 0;
  font-family: "Roboto Mono", monospace;
  font-size: 2rem;
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
  font-family: "Roboto Mono", monospace;
  font-size: 1.8rem;
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
  font-family: "Roboto Mono", monospace;
  font-size: 1.1rem;
  color: #101010;
  line-height: 1.4;
  @media (max-width: 500px) {
    text-align: left;
  }
  @media (max-width: 1000px) {
    font-size: 0.9rem;
  }
`;

export const ProjectLinks = styled.a`
  text-decoration: none;
  color: #f8f8ff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  border: 1px solid #101010;
  margin: 2% 24% 4% 24%;
  background: #4169e1;
  &:hover {
    background: 4169e1;
    color: #f8f8ff;
    border: 1px solid black;
    transition: 0.5s;
    transform: scale(1.1);
  }

  @media (max-width: 1150px) {
    margin: 4% 15% 4% 15%;
  }

  @media (max-width: 1000px) {
    margin: 4% 28% 4% 28%;
  }

  @media (max-width: 500px) {
    margin: 4% 15% 4% 15%;
  }
`;

export const WhiteFont = styled.p`
  margin: 3% 0 3% 0;
  font-family: "Roboto Mono", monospace;
  font-size: 0.8rem;
  line-height: 1.4;
  &:hover {
    background: 4169e1;
    color: #f8f8ff;
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
    text-align: left;
  }
`;

export const Arrow = styled.a`
  text-decoration: none;
  color: #101010;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  @media (max-width: 850px) {
    display: none;
  }
`;

export const IndividualProject = styled.div`
  padding: 0 0 10% 0%;
  border-bottom: 1px black;
  display: flex;
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
  font-family: "Roboto Mono", monospace;
  font-size: 1.3rem;
  text-align: left;
  color: #101010;
  @media (min-width: 1000px) {
    width: 40%;
  }
  @media (max-width: 999px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    margin: 0;
    text-align: center;
  }
`;

export const ProjectImg = styled.img`
  justify-content: space-evenly;
  align-content: center;
  float: left;
  margin: 0 0 0 5%;
  width: 40%;
  height: 350px;
  overflow: hidden;

  @media (max-width: 1000px) {
    margin: 0 auto;
    padding: 5% 0;
    height: auto;
    overflow: none;
    float: none;
    width: 70%;
    height: 250px;
  }
`;

export const ProjectDiv = styled.div`
  display: flex;
  padding: 5% 0;
  @media (max-width: 1000px) {
    display: block;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 0.2em 0.5em;
  margin: 0 0.1em 2.1em 0;
  border: 0.16em solid rgba(255, 255, 255, 0);
  border-radius: 1em;
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
  padding: 5% 0 2% 0;
  font-size: 1.5rem;
  font-family: "Roboto Mono", monospace;
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;
