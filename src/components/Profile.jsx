import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profile() {
  const esp = useSelector((state) => state.lang.esp);
  const dark = useSelector((state) => state.theme.dark);
  const navigate = useNavigate();

  function handleClickTechnologie(tech){
    navigate("/projects", { 
      state: { 
        technologie: tech
      } 
    })
  }

  

  return (
    <main className="profile-page">
      <h1>{esp ? "Perfil" : "Profile"}</h1>
      <div className="profile-pic center">
        <img src={"https://res.cloudinary.com/daynclfo8/image/upload/f_webp,q_80/v1750214101/pp-sin-fondo_t4p1qz.png"} loading="lazy" alt="profile-pic"></img>
      </div>
      <section>
        <h2>bio</h2>
        <p className="profile-description">
          {esp ? (
            <>
              Me especializo en implementar diseños UX/UI con presición pixel perfect. Asegurando que sean accesibles, 
              funcionales y responsivos.
              Me gusta el trabajo y la colaboración en equipo. Soy detallista y me gusta hacer las cosas a tiempo.
            </>
          ) : (
            <>
              I have a passion for UX/UI Design and front end development. 
              I appreciate the value of well-crafted user interfaces
              I value teamwork and companionship. 
              I am patient and self-driven.
            
            </>
          )}
        </p>
      </section>
      <br />
      <section>
        <h2>{esp ? <>tecnologías</> : <>technologies</>}</h2>

        <div className={dark ? "contact-links-dark" : "contact-links-light"}>
        <ul clkassName="lists" style={{display: "flex", flexDirection: "column", lineHeight: "2.2rem"}}>
          <a onClick={()=>handleClickTechnologie("nodejs")}>NodeJs</a>
          <a onClick={()=>handleClickTechnologie("express")}>Express</a>
          <a onClick={()=>handleClickTechnologie("sequelize")}>Sequelize</a>
          <a onClick={()=>handleClickTechnologie("jwt")}>JWT</a>
          <a onClick={()=>handleClickTechnologie("react")}>React</a>
          <a onClick={()=>handleClickTechnologie("redux")}>Redux</a>
          <a onClick={()=>handleClickTechnologie("sass")}>Sass</a>
          <a onClick={()=>handleClickTechnologie("html/css")}>Html/Css</a>
          <a onClick={()=>handleClickTechnologie("figma")}>Figma</a>
          <a onClick={()=>handleClickTechnologie("visual studio code")}>Visual Studio Code</a>
          <a onClick={()=>handleClickTechnologie("github")}>Github</a>
        </ul>
        </div>
      </section>
    </main>
  );
}

export default Profile;
