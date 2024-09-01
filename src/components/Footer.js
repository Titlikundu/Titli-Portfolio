import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3 className="footer-logo">Titli Kundu</h3>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/iamtitlikundu?igsh=MThpb2ppNGM0dmw3cg=="
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="Instagram"
          >
            <FaInstagram className="icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/titli-kundu-0417a6271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  // Update with your LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://github.com/Titlikundu"  // Update with your GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="GitHub"
          >
            <FaGithub className="icon" />
          </a>
        </div>
      </div>
      <div className="footer-section">
        <h4 className="footer-title">Pages</h4>
        <ul className="footer-list grid-2x2">
          <li>
            <a href="/about" className="footer-link">
              About me
            </a>
          </li>
          <li>
            <a href="/gears" className="footer-link">
              Gears
            </a>
          </li>
          <li>
            <a href="/art-gallery" className="footer-link">
              Art Gallery
            </a>
          </li>
          <li>
            <a href="/contact" className="footer-link">
              Contacts
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4 className="footer-title">Contacts</h4>
        
        <p className="footer-contact">
          <a href="mailto:hello@webstica.com" className="footer-link">
            kundutitli2@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
