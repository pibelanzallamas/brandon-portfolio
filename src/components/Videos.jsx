import Credits from "./Credits";
import projects from "../utils/MisProyectos";

function Videos() {
  return (
    <div className="all">
      <div className="content">
        <h1>Videos</h1>
        {projects.map((project) => (
          <div key={project.id}>
            <p className="subtitle top">{project.name}</p>
            <iframe
              width="100%"
              height="auto"
              src={project.youtube}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="top"
            ></iframe>
          </div>
        ))}
        <Credits />
      </div>
    </div>
  );
}

export default Videos;
