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
       {/* <div className="youtube-lite"> */}
          <iframe 
            width="560" 
            height="280" 
            src={`https://www.youtube-nocookie.com/embed/${project.youtube}?autoplay=1&mute=1&rel=0&loop=1&playlist=${project.youtube}`}
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            loading="lazy">
          </iframe>
      {/* </div> */}
      {/* <figure className="image project-image">
        <img
          src={project.image}
          loading="lazy"
          alt={project.name + " imagen"}
        ></img>
      </figure> */}
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
                title={esp?"Ir a sitio web!":"Go to website!"}
              ></img>
            </a>
          </li>
          <li>
            <a href={project.video} target="_blank" rel="noopener noreferrer">
              <img
                src="https://res.cloudinary.com/daynclfo8/image/upload/v1730126279/yt_wqsngf.png"
                alt={"logo-youtube"}
                title={esp?"Ir al video!":"Go to video!"}
              ></img>
            </a>
          </li>
          <li>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <img
                src="https://res.cloudinary.com/daynclfo8/image/upload/v1730126357/gh-light_seldpl.png"
                alt={"logo-github"}
                title="GitHub!"
              ></img>
            </a>
          </li>
        </ul>
      </div>
      {/* <br /> */}
    </div>
  );
}

export default ProjectCard;
