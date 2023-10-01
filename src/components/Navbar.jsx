import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/images">Images</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
