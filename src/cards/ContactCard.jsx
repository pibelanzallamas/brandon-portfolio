import React from "react";
import { useSelector } from "react-redux";

function ContactCard({ link }) {
  const dark = useSelector((state) => state.theme.dark);
  const esp = useSelector((state) => state.lang.esp);

  return (
    <div className={dark ? "contact-links-dark" : "contact-links-light"}>
      <a href={link.link} target="_blank" rel="noopener noreferrer">
        <p>{link.name}</p>
      </a>
    </div>
  );
}

export default ContactCard;
