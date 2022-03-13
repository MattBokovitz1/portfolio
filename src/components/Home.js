import React from "react";
import { Projects, AboutSection } from "../styles/StyledComponents";

import HomeDisplay from "./HomeDisplay";
import MattsSection from "./MattsSection";
import ProjectSection from "./Projects";

function Home() {
  return (
    <>
      <HomeDisplay />
      <AboutSection id="aboutsection">
        <MattsSection />
        <Projects>Projects</Projects>
        <ProjectSection />
      </AboutSection>
    </>
  );
}

export default Home;
