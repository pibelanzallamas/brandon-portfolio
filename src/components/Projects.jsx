import projects from "../utils/MisProyectos";
import ProjectCard from "../cards/ProjectCard";
import Credits from "./Credits";
import { useSelector } from "react-redux";

function Projects() {
  const esp = useSelector((state) => state.lang.esp);

  return (
    <div className="all">
      <div className="content">
        <h1>{esp ? <>proyectos</> : <>projects</>}</h1>
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectCard {...{ project }} />
          </div>
        ))}
        <Credits />
      </div>
    </div>
  );
}

export default Projects;
