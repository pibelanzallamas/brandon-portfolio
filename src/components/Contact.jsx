import React from "react";
import Credits from "./Credits";
import links from "../utils/MisLinks";
import ContactCard from "../cards/ContactCard";
import { useSelector } from "react-redux";

function Contact() {
  const esp = useSelector((state) => state.lang.esp);
  const dark = useSelector((state) => state.theme.dark);

  return (
    <div className={dark ? "all all-dark" : "all all-light"}>
      <div className="content">
        <h1>{esp ? <>contacto</> : <>contact</>}</h1>
        <h3 className={dark ? "subtitle-dark top" : "subtitle-light top"}>
          {esp ? <>redes sociales</> : <>social media</>}
        </h3>
        <div className="top flex-grow">
          {links.map((link) => (
            <ContactCard link={link} />
          ))}
        </div>
        <Credits />
      </div>
    </div>
  );
}

export default Contact;
