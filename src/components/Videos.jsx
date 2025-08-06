import projects from "../utils/projects";
import '@justinribeiro/lite-youtube';

function Videos() {
  return (
    <main className="videos-page">
      <h1>Videos</h1>
      {projects.map((project) => (
        <div className="one-video-card" key={project.id}>
        <h2><u>{project.name}</u></h2>
        <div className="youtube-lite">
          <iframe 
            width="560" 
            height="280" 
            src={`https://www.youtube-nocookie.com/embed/${project.youtube}?autoplay=0&rel=0`}
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>
        </div>
      ))}
    </main>
  );
}

export default Videos;
