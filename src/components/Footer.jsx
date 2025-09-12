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
      <iframe width="100%" height="166" frameborder="no" 
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1447215130&color=%23a4643c&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      {/* <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
        <a href="https://soundcloud.com/tokyopill" title="TOKYOPILL" target="_blank" style="color: #cccccc; text-decoration: none;">TOKYOPILL</a> · <a href="https://soundcloud.com/tokyopill/untitled" title="‎" target="_blank" style="color: #cccccc; text-decoration: none;">‎
        </a>
        </div> */}
    </footer>
  );
}

export default Footer;
