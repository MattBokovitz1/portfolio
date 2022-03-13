import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectDetails from "./ProjectDetails";
import { IndividualProject } from "../../styles/StyledComponents";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  const getProjects = () => {
    axios
      .get("https://polar-everglades-82309.herokuapp.com/projects/")
      .then((res) => {
        setProjects(res.data.data);
      }, [])
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProjects();
  }, []);
  return (
    <IndividualProject>
      {projects.map((project) => {
        return <ProjectDetails key={project.id} project={project} />;
      })}
    </IndividualProject>
  );
};

export default ProjectSection;
