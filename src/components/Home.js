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
  ProjectLinks,
} from "../styles/StyledComponents";
import matt from "../assets/Matt.png";
import front from "../assets/front.jpg";
import plant from "../assets/plants.png";
import nasa from "../assets/nasa.png";
import exercise from "../assets/exercise-shop.png";
import hrf from "../assets/HRF.png";
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
            <ProjectTitle>Human Rights First: Asylum</ProjectTitle>
            <ProjectDescription>
              Human Rights First (HRF) works to link immigration attorneys and
              advocates with asylum seekers and provide those attorneys with
              resources to best represent their clients. The hope is that
              advocates for asylum seekers can use our tools to tailor their
              arguments before a particular judge and maximize their client's
              chances of receiving asylum.
              <br></br>
              <br></br>
              <ProjectLinks href="https://github.com/Lambda-School-Labs/human-rights-first-asylum-fe-a">
                <FontAwesomeIcon icon={faGithub} />
              </ProjectLinks>
            </ProjectDescription>
          </LeftProject>
          <ProjectImg
            src={hrf}
            alt="Human Rights First: Asylum Landing Page"
          ></ProjectImg>
        </IndividualProject>
        <IndividualProject>
          <LeftProject>
            <ProjectTitle>NASA Photo Of Day</ProjectTitle>
            <ProjectDescription>
              React Web application that allows user to select the NASA photo of
              the day and view the photo and description.<br></br>
              <br></br>
              <ProjectLinks href="https://github.com/MattBokovitz1/nasa-photo-of-the-day">
                <FontAwesomeIcon icon={faGithub} />
              </ProjectLinks>
            </ProjectDescription>
          </LeftProject>
          <ProjectImg src={nasa} alt="NASA photo of day app"></ProjectImg>
        </IndividualProject>
        <IndividualProject>
          <LeftProject>
            <ProjectTitle>Exercise Shop</ProjectTitle>
            <ProjectDescription>
              A react app designed to be a store to purchase your favorite
              workout gear. Included front page with lists of items, a shopping
              cart, and a checkout form.
              <br></br>
              <br></br>
              <ProjectLinks href="https://github.com/MattBokovitz1/workout-store">
                <FontAwesomeIcon icon={faGithub} />
              </ProjectLinks>
            </ProjectDescription>
          </LeftProject>
          <ProjectImg src={exercise} alt="Exercise Shop App"></ProjectImg>
        </IndividualProject>
        <IndividualProject>
          <LeftProject>
            <ProjectTitle>Water My Plants</ProjectTitle>
            <ProjectDescription>
              React Web application that catalogues a user's plants. Allows user
              to add, edit, and delete plant information when logged into
              profile.<br></br>
              <br></br>
              <ProjectLinks href="https://github.com/Build-Wk-Water-My-Plants/front-end">
                <FontAwesomeIcon icon={faGithub} />
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
