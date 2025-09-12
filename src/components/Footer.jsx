import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../state/theme";
import { setLang } from "../state/lang";

function Footer() {
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
      {/* BRILLO */}
      <p className="star">✨</p>
      {/* BOTONES */}
      <div
        className={
          dark ? "botones-footer botones-footer-dark" : "botones-footer botones-footer-light"
        }
      >
        {/* THEME */}
        <button
          onClick={() => {
            dispatch(setTheme(!dark));
          }}
        >
          {lan ? (dark ? "Claro" : "Oscuro") : dark ? "Light" : "Dark"}
        </button>
        {/* TOP */}
        <button onClick={scrollToTop}>Top</button>
        {/* ESP/ENG */}
        <button
          onClick={() => {
            dispatch(setLang(!lan));
          }}
        >
          {lan ? "Eng" : "Esp"}
        </button>
      </div>
      {/* CREDITS */}
      <p className="credits">
        {lan
          ? "Hecho con ❤️ por Brandon 🏰"
          : "Made with ❤️ by Brandon 🏰"}
      </p>
    </footer>
  );
}

export default Footer;
