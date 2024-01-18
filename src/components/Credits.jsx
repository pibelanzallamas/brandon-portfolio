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
      <p className="star top center">✨</p>
      <p className="credits top center">
        {lan ? (
          <>
            Todos los derechos reservados. Página diseñada por Brandon Castillo.
            2023
          </>
        ) : (
          <>All Rights Reserved. Page designed by Brandon Castillo. 2023.</>
        )}
      </p>
      <div className="button-top top center">
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
