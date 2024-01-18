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
      <div className={dark ? "content content-dark" : "content content-light"}>
        <h1>{esp ? <>contacto</> : <>contact</>}</h1>
        <div className="top contact">
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
