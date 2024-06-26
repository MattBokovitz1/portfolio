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
        <Projects>Projects</Projects>
        <IndividualProject>
          <LeftProject>
            <ProjectTitle>Fitness Club</ProjectTitle>
            <ProjectDescription>
              React Web application for fitness coach to market classes and for
              athletes to find out about upcoming fitness events in their area.
              Front end deployed to vercel and node backend to heroku.
              <br></br>
              <ProjectLinks href="https://fitness-club.vercel.app/">
                <WhiteFont>
                  Deployed Application
                  <FontAwesomeIcon icon={faRocket} />
                </WhiteFont>
              </ProjectLinks>
              <ProjectLinks href="https://github.com/MattBokovitz1/FitnessClub">
                <WhiteFont>
                  Github Repository
                  <FontAwesomeIcon icon={faGithub} />
                </WhiteFont>
              </ProjectLinks>
            </ProjectDescription>
          </LeftProject>
          <ProjectImg src={workout} alt="Exercise app"></ProjectImg>
        </IndividualProject>
        <IndividualProject>
          <LeftProject>
            <ProjectTitle>NASA Photo Of Day</ProjectTitle>
            <ProjectDescription>
              React Web application to view the NASA photo of the day and
              utilizes datepicker to select previous photos. A description of
              the photo of the day is included on the page.
              <br></br>
              <ProjectLinks href="https://nasa-photo-of-the-day-chi-one.vercel.app/">
                <WhiteFont>
                  Deployed Application
                  <FontAwesomeIcon icon={faRocket} />
                </WhiteFont>
              </ProjectLinks>
              <ProjectLinks href="https://github.com/MattBokovitz1/nasa-photo-of-the-day">
                <WhiteFont>
                  Github Repository
                  <FontAwesomeIcon icon={faGithub} />
                </WhiteFont>
              </ProjectLinks>
            </ProjectDescription>
          </LeftProject>
          <ProjectImg src={nasa} alt="NASA photo of day app"></ProjectImg>
        </IndividualProject>
      </AboutSection>
    </>
  );
}

export default Home;
