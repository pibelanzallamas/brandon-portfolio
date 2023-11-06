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
          <img src="/cowboy-bebop-fast.gif"></img>
        </div>
        <Credits />
      </div>
    </div>
  );
}

export default Home;
