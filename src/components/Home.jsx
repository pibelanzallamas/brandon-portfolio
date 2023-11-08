import Credits from "./Credits";

function Home() {
  return (
    <div className="all">
      <div className="content">
        <div className="title">
          <h1>brandon castillo</h1>
        </div>
        <div className="subtitle">
          <h3>web designer</h3>
        </div>
        <div className="image">
          <img src="/cowboy-bebop-fast.gif" alt="ed-riding-bike"></img>
        </div>
        {/* <Credits /> */}
        <div style={{ "text-align": "center", "font-size": "2.5rem" }}>✨</div>

        <div className="credits project-description">
          <p>All Rights Reserved. Page designed by Brandon Castillo. 2023.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
