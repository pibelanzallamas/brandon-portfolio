import React from "react";
import { useSelector } from "react-redux";

function ContactCard({ link }) {
  const dark = useSelector((state) => state.theme.dark);

  return (
    <div className={dark ? "contact-links-dark" : "contact-links-light center"}>
      <a href={link.link} target="_blank" rel="noopener noreferrer">
        <h2>{link.name}</h2>
      </a>
    </div>
  );
}

export default ContactCard;
