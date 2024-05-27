import projects from "../utils/MisProyectos";
import ProjectCard from "../cards/ProjectCard";
import Credits from "./Credits";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Projects() {
  const esp = useSelector((state) => state.lang.esp);
  const dark = useSelector((state) => state.theme.dark);

  const [resultados, setResultados] = useState([]);
  const [input, setInput] = useState("");

  function handleSearch(e) {
    setInput(e.target.value);
  }

  useEffect(() => {
    setResultados(
      projects.filter((ele) => ele.tags.some((tag) => tag.startsWith(input)))
    );
  }, [input]);

  return (
    <div className={dark ? "all all-dark" : "all all-light"}>
      <div className="content">
        <h1>{esp ? <>proyectos</> : <>projects</>}</h1>
        <input
          placeholder="Ingrese una tecnología"
          value={input}
          onChange={handleSearch}
          className="searchBar top"
        ></input>
        {!input ? (
          projects.map((project) => (
            <div key={project.id}>
              <ProjectCard {...{ project }} />
            </div>
          ))
        ) : (
          <>
            {resultados.map((project) => (
              <div key={project.id}>
                <ProjectCard {...{ project }} />
              </div>
            ))}
          </>
        )}
        <Credits />
      </div>
    </div>
  );
}

export default Projects;
