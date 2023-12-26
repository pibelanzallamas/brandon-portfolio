import Credits from "./Credits";

function Home() {
  return (
    <div className="all">
      <div className="content">
        <div className="ladoA">
          <h1>brandon castillo</h1>
          <h3 className="subtitle top">web designer</h3>
          <div className="image top">
            <img
              src="/img-public/cowboy-bebop-fast.gif"
              alt="ed-riding-bike"
            ></img>
          </div>
        </div>
        <div className="ladoB">
          <Credits />
        </div>
      </div>
    </div>
  );
}

export default Home;
