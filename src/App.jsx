import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Videos from "./components/Videos";
import Contact from "./components/Contact";
import "./styles/app.css";
import { useSelector } from "react-redux";
import Credits from "./components/Credits";

function App() {
  const dark = useSelector((state) => state.theme.dark);

  return (
    <div className={dark ? "full-app dark-mode" : "full-app light-mode"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div style={{flex:"1"}}></div>
      <Credits />
    </div>
  );
}

export default App;
