import Credits from "./Credits";
import { useSelector } from "react-redux";
import profile from "../assets/profile.png";

function Profile() {
  const esp = useSelector((state) => state.lang.esp);
  const dark = useSelector((state) => state.theme.dark);
  const cv = {
    link: "https://drive.google.com/file/d/11LuLfrdupsAoOYkgWqo3uhIpnj9CV7jM/view?usp=share_link",
    link2:
      "https://drive.google.com/file/d/1FIXWL1JmaLhNA2l_XrHTfTRGgOg0GRPQ/view?usp=share_link",
  };

  return (
    <div className={dark ? "all all-dark" : "all all-light"}>
      <div className="content">
        <br />
        <h1>{esp ? <>Perfil</> : <>Profile</>}</h1>
        <div className="profile-pic top center">
          <img src={profile} alt="profile-pic"></img>
        </div>
        <h3 className={dark ? "subtitle-dark top" : "subtitle-light top"}>
          bio
        </h3>
        <p className="profile-description top">
          {esp ? (
            <>
              Nací en Argentina. Tengo una pasión por el diseño y la innovación.
              Aprecio el valor de productos bien elaborados.
            </>
          ) : (
            <>
              I was born in Argentina. I have a passion for design and
              innovation. I appreciate the value of well-crafted products.
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
        {/* <p className={dark ? "subtitle-dark top" : "subtitle-light top"}>cv</p> */}
        <br />
        <div
          className={
            dark ? "contact-links-dark top" : "contact-links-light top"
          }
        >
          <a
            href={esp ? cv.link : cv.link2}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p style={{ fontSize: "2rem" }}>CV</p>
          </a>
        </div>
        <Credits />
      </div>
    </div>
  );
}

export default Profile;
