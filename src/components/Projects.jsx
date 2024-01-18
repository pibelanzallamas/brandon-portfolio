import projects from "../utils/MisProyectos";
import ProjectCard from "../cards/ProjectCard";
import Credits from "./Credits";
import { useSelector } from "react-redux";

function Projects() {
  const esp = useSelector((state) => state.lang.esp);
  const dark = useSelector((state) => state.theme.dark);

  return (
    <div className={dark ? "all all-dark" : "all all-light"}>
      <div className={dark ? "content content-dark" : "content content-light"}>
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
