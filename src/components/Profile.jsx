import { useSelector } from "react-redux";
import profile from "../assets/profile.png";
import cv_esp from "../assets/b_c.pdf"
import cv_eng from "../assets/b_c_r.pdf"


function Profile() {
  const esp = useSelector((state) => state.lang.esp);
  const dark = useSelector((state) => state.theme.dark);
  const cv = {
    link: cv_esp,
    link2:
      cv_eng
  };

  return (
    <main className="project-page">
      <h1>{esp ? <>Perfil</> : <>Profile</>}</h1>
      <section>
        <div className="profile-pic center">
          <img src={profile} loading="lazy" alt="profile-pic"></img>
        </div>
        <h2>bio</h2>
        <p className="profile-description">
          {esp ? (
            <>
              Nací en Argentina. Tengo una pasión por el diseño y la innovación.
              Aprecio el valor de los productos bien elaborados.
            </>
          ) : (
            <>
              I was born in Argentina. I have a passion for design and
              innovation. I appreciate the value of well-crafted products.
            </>
          )}
        </p>
      </section>
      <section>
        <h2>{esp ? <>tecnologías</> : <>technologies</>}</h2>
        <ul className="lists">
          <li>NodeJs</li>
          <li>Express</li>
          <li>Sequelize</li>
          <li>JWT</li>
          <li>React</li>
          <li>Redux</li>
          <li>Sass</li>
          <li>Figma</li>
          <li>Visual Studio Code</li>
          <li>Github</li>
        </ul>
      </section>
      <h2>
        <a href={esp ? cv.link : cv.link2} target="_blank" rel="noopener noreferrer>
          {esp ? <>Descargar CV</> : <>Download CV</>}
        </a>
      </h2>
    </main>
  );
}

export default Profile;
