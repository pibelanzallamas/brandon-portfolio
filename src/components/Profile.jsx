import Credits from "./Credits";
import { useSelector } from "react-redux";
import profile from "../assets/profile.png";

function Profile() {
  const esp = useSelector((state) => state.lang.esp);
  const dark = useSelector((state) => state.theme.dark);
  const cv = {
    link: "https://drive.google.com/file/d/1oCK1fn9D4Rs6cUda6Pd6_CWivQc7raMp/view?usp=sharing",
    link2:
      "https://drive.google.com/file/d/1qVugpyvGeV47p5JdhU1RvcIpeixqZ_p-/view?usp=sharing",
  };

  return (
    <main>
      <h1>{esp ? <>Perfil</> : <>Profile</>}</h1>
      <div className="profile-pic top center">
        <img src={profile} loading="lazy" alt="profile-pic"></img>
      </div>
      <h2>bio</h2>
      <p className="profile-description top">
        {esp ? (
          <>
            Nací en Argentina. Tengo una pasión por el diseño y la innovación.
            Aprecio el valor de los productos bien elaborados.
          </>
        ) : (
          <>
            I was born in Argentina. I have a passion for design and innovation.
            I appreciate the value of well-crafted products.
          </>
        )}
      </p>
      <p className={dark ? "subtitle-dark top" : "subtitle-light top"}>
        {esp ? <>tecnologías</> : <>technologies</>}
      </p>
      <ul className="lists top">
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
      <br />
      <div
        className={dark ? "contact-links-dark top" : "contact-links-light top"}
      >
        <a href={esp ? cv.link : cv.link2}>
          <p style={{ fontSize: "1.4rem" }}>
            {esp ? <>Descargar CV</> : <>Download CV</>}
          </p>
        </a>
      </div>
    </main>
  );
}

export default Profile;
