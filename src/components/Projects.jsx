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
        <br />
        <h1>{esp ? <>proyectos</> : <>projects</>}</h1>
        {/* <form>
          <label>
            {esp ? "Selecione una tecnología" : "Select a technology"}
            <input
              placeholder={
                esp ? "Ingrese una tecnología" : "Enter a technology"
              }
              value={input}
              onChange={handleSearch}
              className="searchBar top"
              list="frameworks"
            ></input>
          </label>
          <datalist id="frameworks">
            <option value="React"></option>
            <option value="Sass"></option>
            <option value="Node"></option>
            <option value="Express"></option>
            <option value="Postgres"></option>
          </datalist>
        </form> */}

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
