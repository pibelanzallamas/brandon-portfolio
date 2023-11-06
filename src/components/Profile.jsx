import Credits from "./Credits";

function Profile() {
  return (
    <div className="all">
      <div className="content">
        <div className="title">
          <h1>Profile</h1>
        </div>
        <div className="profile-pic">
          <img src="/imagenCv.png"></img>
        </div>
        <div className="profile-description">
          <div className="project-title">bio</div>
          <p className="bio">
            Born and rise in Argentina. I like design. I like innovation. I like
            exploring new fields. I like good products.
          </p>
          <div className="project-title">technologies</div>
          <ul className="lists">
            <li>NodeJs</li>
            <li>React</li>
            <li>Sequelize</li>
            <li>Express</li>
            <li>Sass</li>
            <li>JWT</li>
            <li>Figma</li>
            <li>Visual Studio Code</li>
            <li>Postgres</li>
          </ul>
        </div>
        <Credits />
      </div>
    </div>
  );
}

export default Profile;
