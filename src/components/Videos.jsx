import projects from "../utils/proyectos";

function Videos() {
  return (
    <main className="project-page">
      <h1>Videos</h1>
      {projects.map((project) => (
        <div className="one-video-card">
          <h2>{project.name}</h2>
          <div className="youtube-lite">
          <lite-youtube videoid={project.youtube}></lite-youtube>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Videos;
