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
      <figure className="image project-image top">
        <img
          src={project.image}
          loading="lazy"
          alt={project.name + " imagen"}
        ></img>
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
              <img
                src="https://res.cloudinary.com/daynclfo8/image/upload/v1730126328/chrome_piydtk.svg"
                alt={"logo-web"}
              ></img>
            </a>
          </li>
          <li>
            <a href={project.video} target="_blank" rel="noopener noreferrer">
              <img
                src="https://res.cloudinary.com/daynclfo8/image/upload/v1730126279/yt_wqsngf.png"
                alt={"logo-youtube"}
              ></img>
            </a>
          </li>
          <li>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              {dark ? (
                <img
                  src="https://res.cloudinary.com/daynclfo8/image/upload/v1730126357/gh-light_seldpl.png"
                  alt={"logo-github"}
                ></img>
              ) : (
                <img
                  src="https://res.cloudinary.com/daynclfo8/image/upload/v1730126353/gh-dark_zahq0e.png"
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
