import { useSelector } from "react-redux";

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
      {/* <iframe 
        src={`https://www.youtube-nocookie.com/embed/${project.youtube}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy">
      </iframe> */}
      <figure className="project-image-div">
        <img src={project.image}></img>
      </figure>
      <p className="project-description">
        {esp ? project.descripcion : project.description} 
      </p>
      <a className="repo-emoji" href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
        📁
      </a>
    </div>
  );
}

export default ProjectCard;
