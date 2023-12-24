import projects from "../utils/MisProyectos";
import ProjectCard from "../cards/ProjectCard";
import Credits from "./Credits";

function Projects() {
  return (
    <div className="all">
      <div className="content">
        <h1>projects</h1>
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
        <Credits />
      </div>
    </div>
  );
}

export default Projects;
