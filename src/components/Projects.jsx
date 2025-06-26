import projects from "../utils/projects";
import ProjectCard from "../commons/ProjectCard";
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
    <main className="project-page">
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
        projects.map((project) => <ProjectCard {...{ project }} />)
      ) : (
        <>
          {resultados.map((project) => (
            <ProjectCard {...{ project }} />
          ))}
        </>
      )}
    </main>
  );
}

export default Projects;
