import Credits from "./Credits";

function Profile() {
  return (
    <div className="all">
      <div className="content">
        <div className="title">
          <h1>Profile</h1>
        </div>
        <div className="profile-description">
          <div className="profile-pic">
            <img src="/imagenCv.png"></img>
          </div>
          <div className="project-title sub">bio</div>
          <p className="bio">
            I was born and raised in Argentina. I have a passion for design,
            innovation, and exploring new fields. I appreciate the value of
            well-crafted products.
          </p>
          <div className="project-title sub">technologies</div>
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
