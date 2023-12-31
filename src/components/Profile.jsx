import Credits from "./Credits";

function Profile() {
  return (
    <div className="all">
      <div className="content">
        <h1>Profile</h1>
        <div className="profile-pic top center">
          <img src="/profile-pic/imagenCv.png" alt="profile-pic"></img>
        </div>
        <p className="subtitle top">bio</p>
        <p className="top profile-description">
          I was born in Argentina. I have a passion for design and innovation. I
          appreciate the value of well-crafted products.
        </p>
        <p className="subtitle top">technologies</p>
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
