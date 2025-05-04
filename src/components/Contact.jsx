import React from "react";
import links from "../utils/redes-sociales";
import ContactCard from "../commons/ContactCard";
import { useSelector } from "react-redux";

function Contact() {
  const esp = useSelector((state) => state.lang.esp);
  const dark = useSelector((state) => state.theme.dark);

  return (
    <main>
      <h1>{esp ? <>contacto</> : <>contact</>}</h1>
      <h3 className={dark ? "subtitle-dark top" : "subtitle-light top"}>
        {esp ? <>redes sociales</> : <>social media</>}
      </h3>
      <section className="top">
        {links.map((link) => (
          <ContactCard link={link} />
        ))}
      </section>
    </main>
  );
}

export default Contact;
