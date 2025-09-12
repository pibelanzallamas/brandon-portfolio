import { useSelector } from "react-redux";
import cv_esp from "../assets/cv/Brandon Castillo.pdf";
import cv_eng from "../assets/cv/Brandon Castillo Resume.pdf";

function Home() {
  const esp = useSelector((state) => state.lang.esp);
  const dark = useSelector((state) => state.theme.dark);
  const cv = {
    link: cv_esp,
    link2: cv_eng,
  };

  return (
    <main>
      <h1><a className="name" href="https://linkedin.com/in/brandon-castillo-dev" target="_blank">brandon castillo</a></h1>
      <h2>
        <a className="name"  href="https://api.constata.eu/certificate/research+riding+veal+bonfire+dedicator" target="_blank">{esp ? <>Desarrollador Full Stack</> : <>Full Stack Developer</>}</a>
      </h2>
      <figure
        className="image home-image"
        style={{ marginTop: "1rem" }}
      >
        <img src={"https://res.cloudinary.com/daynclfo8/image/upload/v1750214239/home-DVjisMa3_vjhyzx.gif"} loading="lazy" alt="ed-riding-bike"></img>
      </figure>
      <div style={{textAlign: "center"}} className={dark ? "contact-links-dark" : "contact-links-light"}>
        <a
          href={esp ? cv.link : cv.link2}
          target="_blank"
          rel="noopener noreferrer"
          className="cv"
        >
          {esp ? <>Descargar CV 📄</> : <>Download CV 📄</>}
        </a>
      </div>
    </main>
  );
}

export default Home;
