import React from "react";

function ContactCard({ link }) {
  return (
    <div className="contact-links center">
      <a href={link.link} target="_blank" rel="noopener noreferrer">
        <h2>{link.name}</h2>
      </a>
    </div>
  );
}

export default ContactCard;
