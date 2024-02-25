import { useSelector } from "react-redux";

function ProjectCard({ project }) {
  const esp = useSelector((state) => state.lang.esp);
  const dark = useSelector((state) => state.theme.dark);

  return (
    <div>
      <h3 className={dark ? "subtitle-dark top" : "subtitle-light top"}>
        {project.name}
      </h3>
      <p className="date top">
        {project.month} {project.year}
      </p>
      <div className="image top">
        <img
          src={project.darkimage && dark ? project.darkimage : project.image}
          alt={project.name + " imagen"}
        ></img>
      </div>
      <p className="project-description top">
        {esp ? project.descripcion : project.description}
      </p>
      <div className="project-logos top">
        <ul>
          <li>
            <a href={project.web} target="_blank" rel="noopener noreferrer">
              <img src="/sites-logos/weblogo.png" alt={"logo-web"}></img>
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
              <img src="/sites-logos/githublogo.png" alt={"logo-github"}></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
