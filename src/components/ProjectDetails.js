import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import {
  ProjectTitle,
  ProjectDescription,
  ProjectImg,
  LeftProject,
  ProjectLinks,
  WhiteFont,
  ProjectDiv,
} from "../styles/StyledComponents";

const ProjectDetails = ({ project }) => {
  return (
    <>
      <ProjectDiv>
        <LeftProject>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>
            {project.description}

            <ProjectLinks href={project.project_link}>
              <WhiteFont>
                Deployed Application
                <FontAwesomeIcon icon={faRocket} />
              </WhiteFont>
            </ProjectLinks>
            <ProjectLinks href={project.github_link}>
              <WhiteFont>
                Github Repository
                <FontAwesomeIcon icon={faGithub} />
              </WhiteFont>
            </ProjectLinks>
          </ProjectDescription>
        </LeftProject>
        <ProjectImg
          class="hrf"
          src={project.project_photo}
          alt={project.title}
        />
      </ProjectDiv>
    </>
  );
};

export default ProjectDetails;
