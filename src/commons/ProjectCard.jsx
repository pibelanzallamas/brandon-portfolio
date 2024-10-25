import { useSelector } from "react-redux";

function ProjectCard({ project }) {
  const esp = useSelector((state) => state.lang.esp);
  const dark = useSelector((state) => state.theme.dark);

  return (
    <div>
      {/* titulo */}
      <h3 className={dark ? "subtitle-dark top" : "subtitle-light top"}>
        {project.name}
      </h3>

      {/* fecha */}
      <p className="date top">
        {project.month} {project.year}
      </p>

      {/* imagen */}
      {console.log(project.image)}
      <figure className="image project-image top">
        <img src={project.image} alt={project.name + " imagen"}></img>
      </figure>

      {/* descripción */}
      <p className="project-description top">
        {esp ? project.descripcion : project.description}
      </p>

      {/* links */}
      <div className="project-logos top">
        <ul>
          <li>
            <a href={project.web} target="_blank" rel="noopener noreferrer">
              <img src="/sites-logos/chrome.svg" alt={"logo-web"}></img>
            </a>
          </li>
          <li>
            <a href={project.video} target="_blank" rel="noopener noreferrer">
              <img
                src="/sites-logos/youtubelogo.png"
                alt={"logo-youtube"}
              ></img>
            </a>
          </li>
          <li>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              {dark ? (
                <img src="/sites-logos/github.png" alt={"logo-github"}></img>
              ) : (
                <img
                  src="/sites-logos/github.256x251.png"
                  alt={"logo-github"}
                ></img>
              )}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
