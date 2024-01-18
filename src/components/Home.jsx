import Credits from "./Credits";
import { useSelector } from "react-redux";

function Home() {
  const esp = useSelector((state) => state.lang.esp);
  const dark = useSelector((state) => state.theme.dark);

  return (
    <div className={dark ? "all all-dark" : "all all-light"}>
      <div className={dark ? "content content-dark" : "content content-light"}>
        <h1>brandon castillo</h1>
        <h3 className="subtitle top">
          {esp ? <>diseñador web</> : <> web designer</>}
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
