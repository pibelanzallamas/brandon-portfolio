import Credits from "./Credits";
import projects from "../utils/MisProyectos";
import { useSelector } from "react-redux";

function Videos() {
  const dark = useSelector((state) => state.theme.dark);

  return (
    <div className={dark ? "all all-dark" : "all all-light"}>
      <div className={dark ? "content content-dark" : "content content-light"}>
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
