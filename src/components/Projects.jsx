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
    <main className="videos-page">
      <h1>{esp ? <>proyectos</> : <>projects</>}</h1>
        {resultados.map((project) => (
          <ProjectCard {...{ project }} />
        ))}
    </main>
  );
}

export default Projects;
