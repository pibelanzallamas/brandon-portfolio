import Credits from "./Credits";
import { useSelector } from "react-redux";

function Home() {
  const esp = useSelector((state) => state.lang.esp);
  const dark = useSelector((state) => state.theme.dark);

  return (
    <div className={dark ? "all all-dark" : "all all-light"}>
      <div className="content">
        <h1>brandon castillo</h1>
        <h3 className={dark ? "subtitle-dark top" : "subtitle-light top"}>
          <u>{esp ? <>desarrollador web</> : <>web developer</>}</u>
        </h3>
        <div className="image top" style={{ marginTop: "2rem" }}>
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
