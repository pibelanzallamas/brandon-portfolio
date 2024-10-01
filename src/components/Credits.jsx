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
    <div>
      <p className="star top">✨</p>
      <p className="credits top">
        {lan ? (
          <>
            <p>Creado por Brandon Castillo ⚔️🏰</p>
          </>
        ) : (
          <>
            <p>Created by Brandon Castillo ⚔️🏰</p>
          </>
        )}
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
    </div>
  );
}

export default Credits;
