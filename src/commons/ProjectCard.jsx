import { useSelector } from "react-redux";
import webl from "../assets/social-media/white-web.png"

function ProjectCard({ project }) {
  const esp = useSelector((state) => state.lang.esp);
  const dark = useSelector((state) => state.theme.dark);

  return (
    <div className="one-project-card">
      <h2>
        <a href={project.web} target="_blank" rel="noopener noreferrer">
          🔗 <u>{project.name}</u> 🌎
        </a>
      </h2>
      <p className="date">
        {project.month} {project.year}
      </p>
      <iframe 
        // width="560" 
        // height="280" 
        src={`https://www.youtube-nocookie.com/embed/${project.youtube}?autoplay=1&mute=1&rel=0&loop=1&playlist=${project.youtube}`}
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        loading="lazy">
      </iframe>
      {/* <figure className="image project-image">
        <img
          src={project.image}
          loading="lazy"
          alt={project.name + " imagen"}
        ></img>
      </figure> */}
      <p className="project-description">
        {esp ? project.descripcion : project.description}
      </p>
      <div className="project-logos repo-emoji">
        <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub!">
          📁
        </a>
      </div>
      {/* <br /> */}
    </div>
  );
}

export default ProjectCard;
