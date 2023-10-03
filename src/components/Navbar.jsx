import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <a href="#projects">Projects</a>
        <a href="#videos">Videos</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
