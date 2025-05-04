import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../state/theme";
import { setLang } from "../state/lang";

function Credits() {
  const dark = useSelector((state) => state.theme.dark);
  const lan = useSelector((state) => state.lang.esp);
  const dispatch = useDispatch();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <p className="star">✨</p>
      <p className="credits top">
        {lan
          ? "Creado por Brandon Castillo ⚔️🏰"
          : "Created by Brandon Castillo ⚔️🏰"}
      </p>
      <div
        className={
          dark ? "botones botones-dark top" : "botones botones-light top"
        }
      >
        <button
          onClick={() => {
            dispatch(setTheme(!dark));
          }}
        >
          {lan ? (dark ? "Claro" : "Oscuro") : dark ? "Light" : "Dark"}
        </button>

        <button onClick={scrollToTop}>Top</button>

        <button
          onClick={() => {
            dispatch(setLang(!lan));
          }}
        >
          {lan ? "Eng" : "Esp"}
        </button>
      </div>
    </footer>
  );
}

export default Credits;
