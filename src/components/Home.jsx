import Credits from "./Credits";
import { useSelector } from "react-redux";

function Home() {
  const esp = useSelector((state) => state.lang.esp);

  return (
    <div className="all">
      <div className="content">
        <h1>brandon castillo</h1>
        <h3 className="subtitle top">
          {esp ? <>desarrolador web</> : <> web developer</>}
        </h3>
        <div className="image top contact">
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
