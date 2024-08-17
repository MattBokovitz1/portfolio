import React from "react";
import {
  Projects,
  AboutSection,
  IndividualProject,
  ProjectTitle,
  ProjectDescription,
  ProjectImg,
  LeftProject,
  ProjectLinks,
  WhiteFont,
} from "../../styles/StyledComponents";

import HomeDisplay from "./HomeDisplay";
import MattsSection from "../home/MattsSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import nasa from "../../assets/nasa.png";
import workout from "../../assets/workout.png";
function Home() {
  return (
    <>
      <HomeDisplay />
      <AboutSection id="aboutsection">
        <MattsSection />
      </AboutSection>
    </>
  );
}

export default Home;
