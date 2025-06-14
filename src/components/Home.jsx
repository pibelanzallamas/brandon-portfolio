import { useSelector } from "react-redux";
import home from "../assets/home.gif";
import cv_esp from "../assets/cv/cv_esp.pdf";
import cv_eng from "../assets/cv/cv_eng.pdf";

function Home() {
  const esp = useSelector((state) => state.lang.esp);
  const dark = useSelector((state) => state.theme.dark);
  const cv = {
    link: cv_esp,
    link2: cv_eng,
  };

  return (
    <main>
      <h1>brandon castillo</h1>
      <h2>
        <u>{esp ? <>Desarrollador Full Stack</> : <>Full Stack Developer</>}</u>
      </h2>
      <figure
        className="image home-image"
        style={{ marginTop: "2rem", aspectRatio: "498 / 336" }}
      >
        <img src={home} loading="lazy" alt="ed-riding-bike"></img>
      </figure>
      <div className={dark ? "contact-links-dark cv" : "contact-links-light cv"}>
        <a
          href={esp ? cv.link : cv.link2}
          target="_blank"
          rel="noopener noreferrer"
        >
          {esp ? <>Descargar CV</> : <>Download CV</>}
        </a>
      </div>
    </main>
  );
}

export default Home;
