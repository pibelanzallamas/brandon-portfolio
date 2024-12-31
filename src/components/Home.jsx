import Credits from "./Credits";
import { useSelector } from "react-redux";
import home from "../assets/home.gif";

function Home() {
  const esp = useSelector((state) => state.lang.esp);
  const dark = useSelector((state) => state.theme.dark);

  return (
    <div className={dark ? "all all-dark" : "all all-light"}>
      <div className="content">
        <br />
        <h1>brandon castillo</h1>
        <h2 className={dark ? "subtitle-dark top" : "subtitle-light top"}>
          <u>{esp ? <>desarrollador web</> : <>web developer</>}</u>
        </h2>
        <div
          className="image home-image top"
          style={{ marginTop: "2rem", aspectRatio: "498 / 336" }}
        >
          <img src={home} loading="lazy" alt="ed-riding-bike"></img>
        </div>
        <Credits />
      </div>
    </div>
  );
}

export default Home;
