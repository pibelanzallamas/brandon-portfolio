import { useState } from "react";
import moon from "../assets/half-moon.svg";
import { setTheme } from "../state/theme";
import { setLang } from "../state/lang";
import { useDispatch, useSelector } from "react-redux";

function Credits() {
  const [dark, setDark] = useState(false);
  const lan = useSelector((state) => state.lang.esp);
  const dispatch = useDispatch();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function handleDarkMode() {
    dispatch(setTheme(!dark));
  }

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
        <button onClick={handleDarkMode}>
          <img src={moon} alt="moon" />
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
