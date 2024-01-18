import Credits from "./Credits";
import { useSelector } from "react-redux";

function Profile() {
  const esp = useSelector((state) => state.lang.esp);
  const dark = useSelector((state) => state.theme.dark);

  return (
    <div className={dark ? "all all-dark" : "all all-light"}>
      <div className={dark ? "content content-dark" : "content content-light"}>
        <h1>{esp ? <>Perfil</> : <>Profile</>}</h1>
        <div className="profile-pic top center">
          <img src="/profile-pic/imagenCv.png" alt="profile-pic"></img>
        </div>
        <p className="subtitle top">bio</p>
        <p className="top profile-description">
          {esp ? (
            <>
              Nací en Argentina. Mis padres son peruanos. Tengo una pasión por
              el diseño y la innovación. Aprecio el valor de productos bien
              elaborados.
            </>
          ) : (
            <>
              I was born in Argentina. My parents are peruvian. I have a passion
              for design and innovation. I appreciate the value of well-crafted
              products.
            </>
          )}
        </p>
        <p className="subtitle top">
          {esp ? <>tecnologías</> : <>technologies</>}
        </p>
        <ul className="lists top">
          <li>NodeJs</li>
          <li>Express</li>
          <li>React</li>
          <li>Postgres</li>
          <li>Sequelize</li>
          <li>Sass</li>
          <li>JWT</li>
          <li>Figma</li>
          <li>Visual Studio Code</li>
        </ul>
        <Credits />
      </div>
    </div>
  );
}

export default Profile;
