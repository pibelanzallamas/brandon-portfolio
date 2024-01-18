import React from "react";
import Credits from "./Credits";
import links from "../utils/MisLinks";
import ContactCard from "../cards/ContactCard";
import { useSelector } from "react-redux";

function Contact() {
  const esp = useSelector((state) => state.lang.esp);
  return (
    <div className="all">
      <div className="content">
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
