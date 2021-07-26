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
  Arrow,
  WhiteFont,
  SmallProfile,
} from "../styles/StyledComponents";

import matt from "../assets/Matt.png";
import smallprofile from "../assets/SmallProfile.png";
import front from "../assets/front.jpg";
import plant from "../assets/plantlogin.png";
import nasa from "../assets/nasa.png";
import exercise from "../assets/exercise-shop.png";
import hrf from "../assets/HRF.png";
import workout from "../assets/workout.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleDoubleDown, faRocket } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
      <FrontPicture src={front}></FrontPicture>
      <Arrow>
        <div class="bounce">
          <div class="icon">
            <FontAwesomeIcon icon={faAngleDoubleDown} />
          </div>
        </div>
      </Arrow>
      <AboutSection id="aboutsection">
        <Matt>Matt Bokovitz</Matt>
        <MattSection>
          <ProfilePicture src={matt} alt="Profile Picture" />
          <SmallProfile src={smallprofile} alt="Profile Picture" />
          <Bio>
            I'm passionate about innovation and driven to help others. I am
            looking for an opportunity to make a significant contribution to an
            interesting, complex project. <br></br>
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
              Human Rights First (HRF) works to link immigration attorneys with
              asylum seekers and provide those attorneys with resources to best
              represent their clients. The hope is that advocates for asylum
              seekers can use our tools to tailor their arguments before a
              particular judge and maximize their client's chances of receiving
              asylum.
              <br></br>
              <ProjectLinks href="https://a.humanrightsfirstasylum.dev/login">
                {/* <ProjectDescription> */}
                <WhiteFont>
                  Deployed Application
                  <FontAwesomeIcon icon={faRocket} />
                </WhiteFont>
                {/* </ProjectDescription> */}
              </ProjectLinks>
              <ProjectLinks href="https://github.com/Lambda-School-Labs/human-rights-first-asylum-fe-a">
                {/* <ProjectDescription> */}
                <WhiteFont>
                  Github Repository
                  <FontAwesomeIcon icon={faGithub} />
                </WhiteFont>
                {/* </ProjectDescription> */}
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
              React Web application for fitness coach to use to market classes
              and for athletes to find out about upcoming fitness events in
              their area. Users can register as admins or clients and then sign
              in. Admins can create, edit, and delete workout classes, and
              clients can view the classes. Front end deployed to vercel and
              node backend to heroku.
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
          <ProjectImg
            class="workout"
            src={workout}
            alt="Fitness Club login page picture"
          ></ProjectImg>
        </IndividualProject>
        <IndividualProject>
          <LeftProject>
            <ProjectTitle>Exercise Shop</ProjectTitle>
            <ProjectDescription>
              React Web application designed to purchase your favorite workout
              gear. Front page shows a list of workout gear where user is able
              to add items to shopping cart. From the shopping cart, a user is
              able to delete items from the cart or complete the order and fill
              out a checkout form.
              <br></br>
              <ProjectLinks href="https://workout-store.vercel.app/">
                {/* <ProjectDescription> */}
                <WhiteFont>
                  Deployed Application
                  <FontAwesomeIcon icon={faRocket} />
                </WhiteFont>
                {/* </ProjectDescription> */}
              </ProjectLinks>
              <ProjectLinks href="https://github.com/MattBokovitz1/workout-store">
                {/* <ProjectDescription> */}
                <WhiteFont>
                  Github Repository
                  <FontAwesomeIcon icon={faGithub} />
                </WhiteFont>
                {/* </ProjectDescription> */}
              </ProjectLinks>
            </ProjectDescription>
          </LeftProject>
          <ProjectImg src={exercise} alt="Exercise Shop App"></ProjectImg>
        </IndividualProject>
        <IndividualProject>
          <LeftProject>
            <ProjectTitle>NASA Photo Of Day</ProjectTitle>
            <ProjectDescription>
              React Web application that allows user to select a date and view
              the NASA photo of the day. A description of the photo of the day
              is included on the page to provide context to what the user is
              viewing.<br></br>
              <ProjectLinks href="https://nasa-photo-of-the-day-chi-one.vercel.app/">
                {/* <ProjectDescription> */}
                <WhiteFont>
                  Deployed Application
                  <FontAwesomeIcon icon={faRocket} />
                </WhiteFont>
                {/* </ProjectDescription> */}
              </ProjectLinks>
              <ProjectLinks href="https://github.com/MattBokovitz1/nasa-photo-of-the-day">
                {/* <ProjectDescription> */}
                <WhiteFont>
                  Github Repository
                  <FontAwesomeIcon icon={faGithub} />
                </WhiteFont>
                {/* </ProjectDescription> */}
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
              <ProjectLinks href="https://water-my-plants-tau.vercel.app/">
                {/* <ProjectDescription> */}
                <WhiteFont>
                  Deployed Application
                  <FontAwesomeIcon icon={faRocket} />
                </WhiteFont>
                {/* </ProjectDescription> */}
              </ProjectLinks>
              <ProjectLinks href="https://github.com/Build-Wk-Water-My-Plants/front-end">
                {/* <ProjectDescription> */}
                <WhiteFont>
                  Github Repository
                  <FontAwesomeIcon icon={faGithub} />
                </WhiteFont>
                {/* </ProjectDescription> */}
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
