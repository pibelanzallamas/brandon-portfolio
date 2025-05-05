import Credits from "./Credits";
import projects from "../utils/proyectos";
import { useSelector } from "react-redux";

function Videos() {
  const dark = useSelector((state) => state.theme.dark);

  return (
    <main className="project-page">
      <h1>Videos</h1>
      {projects.map((project) => (
        <div className="one-video-card">
          <h2>{project.name}</h2>
          <iframe
            width="100%"
            height="auto"
            src={project.youtube}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
      ))}
    </main>
  );
}

export default Videos;
