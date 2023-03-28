import ProjectDetails from "./ProjectDetails";
import { IndividualProject } from "../../styles/StyledComponents";
import Projects from "../../data/projects";

const ProjectSection = () => {
  const projects = Projects;
  return (
    <IndividualProject>
      {projects.map((project) => {
        return <ProjectDetails key={project.id} project={project} />;
      })}
    </IndividualProject>
  );
};

export default ProjectSection;
