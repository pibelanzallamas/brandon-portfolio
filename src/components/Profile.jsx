import Credits from "./Credits";

function Profile() {
  return (
    <div className="all">
      <div className="content">
        <div className="profile-title">
          <h2>Profile</h2>
        </div>
        <div className="profile-pic">
          <img src="/imagenCv.png"></img>
        </div>
        <div className="profile-description">
          <p>
            Nacido y criado en la ciudad de Buenos Aires, inicio su carrera como
            musico luego de ver School of Rock amante del diseño, la música, y
            el arte. Su nueva pasión es el diseño de paginas web.
          </p>
        </div>
        <Credits />
      </div>
    </div>
  );
}

export default Profile;
