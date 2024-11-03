import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Videos from "./components/Videos";
import Contact from "./components/Contact";
import "./styles/app.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

// el prorama es que necesito money y
// como lo quiero hacer
// programando
// puedes programar lo que sea
// puedes crear valor
// buenos vecinos ---
// es tu cv
// camino de vida
// carrera de vida
