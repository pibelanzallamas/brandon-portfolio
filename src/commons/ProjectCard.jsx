import { useSelector } from "react-redux";
import webl from "../assets/social-media/white-web.png"

function ProjectCard({ project }) {
  const esp = useSelector((state) => state.lang.esp);
  const dark = useSelector((state) => state.theme.dark);

  return (
    <div className="one-project-card">
      <h2>
        <u>{project.name}</u>
      </h2>
      <p className="date">
        {project.month} {project.year}
      </p>
      <figure className="image project-image">
        <img
          src={project.image}
          loading="lazy"
          alt={project.name + " imagen"}
        ></img>
      </figure>
      <p className="project-description">
        {esp ? project.descripcion : project.description}
      </p>
      <div className="project-logos">
        <ul>
          <li>
            <a href={project.web} target="_blank" rel="noopener noreferrer">
              <img
                src={webl}
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
      {/* <br /> */}
    </div>
  );
}

export default ProjectCard;
