import { useSelector } from "react-redux";

function Profile() {
  const esp = useSelector((state) => state.lang.esp);

  return (
    <main className="project-page">
      <h1>{esp ? <>Perfil</> : <>Profile</>}</h1>
      <div className="profile-pic center">
        <img src={"https://res.cloudinary.com/daynclfo8/image/upload/f_webp,q_80/v1750214101/pp-sin-fondo_t4p1qz.png"} loading="lazy" alt="profile-pic"></img>
      </div>
      <section>
        <h2>bio</h2>
        <p className="profile-description">
          {esp ? (
            <>
              Nací en Argentina. Tengo una pasión por el diseño y la innovación.
              {/* Aprecio el valor de los productos bien elaborados. */}
              Aprecio el valor de los buenos productos.
            </>
          ) : (
            <>
              I was born in Argentina. I have a passion for design and innovation. 
              I appreciate the value of well-crafted products.
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
    </main>
  );
}

export default Profile;
