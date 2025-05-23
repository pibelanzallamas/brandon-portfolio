import { useSelector } from "react-redux";
import home from "../assets/home.gif";

function Home() {
  const esp = useSelector((state) => state.lang.esp);
  const dark = useSelector((state) => state.theme.dark);

  return (
    <main>
      <h1>brandon castillo</h1>
      <h2>
        <u>{esp ? <>desarrollador web</> : <>web developer</>}</u>
      </h2>
      <div
        className="image home-image top"
        style={{ marginTop: "2rem", aspectRatio: "498 / 336" }}
      >
        <img src={home} loading="lazy" alt="ed-riding-bike"></img>
      </div>
    </main>
  );
}

export default Home;
