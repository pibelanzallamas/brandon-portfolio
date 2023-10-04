import projects from "../utils/MisProyectos";
import ProjectCard from "../cards/ProjectCard";

function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="all">
      <div className="content">
        <div className="title">
          <span className="fixed">
            <h1>brandon castillo&#10048;</h1>
          </span>
        </div>
        <div className="subtitle">
          <h3>web designer</h3>
        </div>
        <div className="image">
          <img src="/cowboy-bebop-fast.gif"></img>
        </div>

        <div className="profile-title">
          <h3>biogafía</h3>
        </div>
        <div className="profile-pic">
          <img src="/imagenCv.png"></img>
        </div>
        <div className="profile-description">
          <p>
            Nacido y criado en la ciudad de Buenos Aires, inicio su carrera como
            musico luego de ver School of Rock amante del diseño, la música, y
            el arte. Su nueva pasión es el diseño de paginas web.
          </p>
        </div>

        <div id="projects" className="title">
          <h1>projects</h1>
        </div>

        {projects.map((project) => (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}

        <div id="videos" className="title">
          <h1>videos</h1>
        </div>

        <div id="contact" className="title">
          <h1>contact</h1>
        </div>
        <div className="contact-links">
          <a
            href={"https://github.com/pibelanzallamas"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Github</h2>
          </a>
          <a
            href={"https://www.linkedin.com/in/brandon-castillo-dev/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>LinkedIn</h2>
          </a>
          <a
            href={"http://discord.com/users/995051014883381318"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Discord</h2>
          </a>
          <a
            href={"https://twitter.com/castill0666"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Twitter</h2>
          </a>
          <a
            href={"https://www.instagram.com/castill0.666/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Instagram</h2>
          </a>
          <a
            href={"https://www.twitch.tv/castill0666"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Twitch</h2>
          </a>
          <a
            href={"https://www.youtube.com/@Brandooon95/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Youtube</h2>
          </a>
          <a
            href={"https://www.codewars.com/users/pibelanzallamas"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Codewars</h2>
          </a>
          <a
            href={"https://leetcode.com/pibelanzallamas/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>LeetCode</h2>
          </a>
        </div>

        <div style={{ "text-align": "center", "font-size": "3rem" }}>✨</div>

        <div className="credits project-description">
          <p>
            Todos los Derechos Reservados. Página diseñada por Brandon Castillo.
            2023.
          </p>
        </div>

        <div className="button-inicio">
          <a onClick={scrollToTop}>Inicio</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
