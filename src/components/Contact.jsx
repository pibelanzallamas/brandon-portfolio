import React from "react";
import links from "../utils/redes-sociales";
import ContactCard from "../commons/ContactCard";
import { useSelector } from "react-redux";

function Contact() {
  const esp = useSelector((state) => state.lang.esp);

  return (
    <main>
      <h1>{esp ? <>contacto</> : <>contact</>}</h1>
      <br />
      {links.map((link) => (
        <ContactCard link={link} />
      ))}
    </main>
  );
}

export default Contact;
