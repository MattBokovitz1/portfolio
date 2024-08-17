import React from "react";
import {
  AboutSection
} from "../../styles/StyledComponents";

import HomeDisplay from "./HomeDisplay";
import MattsSection from "../home/MattsSection";

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
