function ProjectCard(project) {
  return (
    <div>
      <div className="project-title">
        <h3>{project.title}</h3>
      </div>

      <div className="image">
        <img src={project.image}></img>
      </div>
      <div className="description">
        <p>{project.description}</p>
      </div>
      <div className="logos">
        <ul>
          <li>WebPage</li>
          <li>Demo</li>
          <li>Github</li>
          <li>Press</li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
