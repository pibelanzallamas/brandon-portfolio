import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
