function ProjectCard({ project }) {
  return (
    <div>
      <h3 className="subtitle top">{project.name}</h3>

      <p className="top">
        {project.month} {project.year}
      </p>

      <div className="image top">
        <img src={project.image} alt={project.name + " imagen"}></img>
      </div>

      <p className="project-description top"> {project.description}</p>

      <div className="project-logos top">
        <ul>
          <li>
            <a href={project.web} target="_blank" rel="noopener noreferrer">
              <img src="/sites-logos/weblogo.png" alt={"logo-web"}></img>
            </a>
          </li>
          <li>
            <a href={project.youtube} target="_blank" rel="noopener noreferrer">
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
