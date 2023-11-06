import Credits from "./Credits";

function Contact() {
  return (
    <div className="all">
      <div className="content">
        <div id="contact" name="contact" className="title">
          <h1>contact</h1>
        </div>
        <div className="contact-links">
          <a
            href={"https://github.com/pibelanzallamas"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Github</h2>
          </a>
          <a
            href={"https://www.linkedin.com/in/brandon-castillo-dev"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>LinkedIn</h2>
          </a>
          <a
            href={"http://discord.com/users/995051014883381318"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Discord</h2>
          </a>
          <a
            href={"https://twitter.com/castill0666"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Twitter</h2>
          </a>
          <a
            href={"https://www.instagram.com/castill0.666"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Instagram</h2>
          </a>
          <a
            href={"https://www.twitch.tv/castill0666"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Twitch</h2>
          </a>
          <a
            href={"https://www.youtube.com/@Brandooon95"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Youtube</h2>
          </a>
          <a
            href={"https://www.codewars.com/users/pibelanzallamas"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Codewars</h2>
          </a>
          <a
            href={"https://leetcode.com/pibelanzallamas"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>LeetCode</h2>
          </a>
        </div>
        <Credits />
      </div>
    </div>
  );
}

export default Contact;
