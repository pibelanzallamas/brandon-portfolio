import Credits from "./Credits";
import links from "../utils/MisLinks";
import ContactCard from "../cards/ContactCard";

function Contact() {
  return (
    <div className="all">
      <div className="content">
        <h1>contact</h1>
        <div className="top">
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
