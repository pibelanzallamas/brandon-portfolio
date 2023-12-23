function ProjectCard({ project }) {
  return (
    <div className="project-content">
      <div className="project-title">
        <h3>{project.name}</h3>
      </div>
      <div className="project-subtitle">
        <p>
          {project.month} {project.year}
        </p>
      </div>
      <div className="project-image">
        <img src={project.image} alt={project.name + " imagen"}></img>
      </div>

      <div className="project-description">
        <p>{project.description}</p>
      </div>

      <div className="project-logos">
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
