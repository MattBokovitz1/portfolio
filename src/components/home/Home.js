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
import plant from "../../assets/plantlogin.png";
import nasa from "../../assets/nasa.png";
import workout from "../../assets/workout.png";
import hrf from "../../assets/HRF.png";
function Home() {
  return (
    <>
      <HomeDisplay />
      <AboutSection id="aboutsection">
        <MattsSection />
        <Projects>Projects</Projects>
        <IndividualProject>
          <LeftProject>
            <ProjectTitle>Human Rights First</ProjectTitle>
            <ProjectDescription>
              Human Rights First (HRF) links immigration attorneys with asylum
              seekers and provides those attorneys with the best resources to
              represent their clients.
              <br></br>
              <ProjectLinks href="https://github.com/Lambda-School-Labs/human-rights-first-asylum-fe-a">
                <WhiteFont>
                  Github Repository
                  <FontAwesomeIcon icon={faGithub} />
                </WhiteFont>
              </ProjectLinks>
            </ProjectDescription>
          </LeftProject>
          <ProjectImg
            class="hrf"
            src={hrf}
            alt="Human Rights First: Asylum Landing Page"
          ></ProjectImg>
        </IndividualProject>
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
        <IndividualProject>
          <LeftProject>
            <ProjectTitle>Water My Plants</ProjectTitle>
            <ProjectDescription>
              React Web application that catalogues a user's plants. Allows user
              to add, edit, and delete plant information when logged into
              profile. Connected to quotes API which displays pleasant quote on
              login page.<br></br>
              <ProjectLinks href="https://github.com/Build-Wk-Water-My-Plants/front-end">
                <WhiteFont>
                  Github Repository
                  <FontAwesomeIcon icon={faGithub} />
                </WhiteFont>
              </ProjectLinks>
            </ProjectDescription>
          </LeftProject>
          <ProjectImg src={plant} alt="Water My Plants App"></ProjectImg>
        </IndividualProject>
      </AboutSection>
    </>
  );
}

export default Home;
