import Credits from "./Credits";

function Home() {
  return (
    <div className="all">
      <div className="content">
        <div className="title">
          <h1>brandon castillo</h1>
        </div>
        <div className="subtitle top">
          <h3>web designer</h3>
        </div>
        <div className="image top">
          <img
            src="/img-public/cowboy-bebop-fast.gif"
            alt="ed-riding-bike"
          ></img>
        </div>
        <Credits />
      </div>
    </div>
  );
}

export default Home;
