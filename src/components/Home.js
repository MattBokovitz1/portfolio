import React from "react";
import {
  Projects,
  ProfilePicture,
  Bio,
  MattSection,
  AboutSection,
  Matt,
  FrontPicture,
  ProjectTitle,
  ProjectDescription,
  IndividualProject,
  ProjectImg,
  LeftProject,
  OutsideLinks,
} from "../styles/StyledComponents";
import matt from "../assets/Matt.png";
import front from "../assets/front.jpg";
import plant from "../assets/plants.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <>
      <FrontPicture src={front}></FrontPicture>
      <AboutSection>
        <Matt>Matt Bokovitz</Matt>
        <MattSection>
          <ProfilePicture src={matt} alt="Profile Picture" />
          <Bio>
            I'm passionate about innovation and driven by impact. <br></br>
            <br></br>I am a Web Developer in Philadelphia, PA. My current tech
            stack includes React.js and Node.js. I enjoy making websites with
            clean and easily navigable designs.
            <br></br>
            <br></br>
            Also, a large reason for creating this site was to provide a space
            to share my writing. I plan on writing about ideas and bits of life
            that have shaped how I view the world in an appreciative manner.
          </Bio>
        </MattSection>
        <Projects>Projects</Projects>
        <IndividualProject>
          <LeftProject>
            <ProjectTitle>Water My Plants</ProjectTitle>
            <ProjectDescription>
              React Web application that catalogues a user's plants. Allows user
              to add, edit, and delete plant information when logged into
              profile.<br></br>
              <br></br>
              <OutsideLinks href="https://github.com/Build-Wk-Water-My-Plants/front-end">
                <FontAwesomeIcon icon={faGithub} />
              </OutsideLinks>
            </ProjectDescription>
          </LeftProject>
          <ProjectImg src={plant} alt="Water My Plants App"></ProjectImg>
        </IndividualProject>
      </AboutSection>
    </>
  );
}

export default Home;
