import projects from "../utils/MisProyectos";
import ProjectCard from "../cards/ProjectCard";

function Home() {
  return (
    <div className="all">
      <div className="content">
        <div className="title">
          <h1>brandon castillo</h1>
        </div>
        <div className="subtitle">
          <h3>web designer</h3>
        </div>
        <div className="home-image">
          <img src="/cowboy-bebop-fast.gif"></img>
        </div>

        <div className="subtitle">
          <h3>bio</h3>
        </div>
        <div className="profile-pic">
          <img src="/imagenCv.png"></img>
        </div>
        <div className="bio">
          <p>
            Nacido y criado en la ciudad de Buenos Aires, inicio su carrera como
            músico luego de ver la pelicula School of Rock, amante del diseño,
            la música, y los autos.
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
        <p>
          <a>Github</a> <a>Youtube</a>
        </p>
      </div>
    </div>
  );
}

export default Home;
