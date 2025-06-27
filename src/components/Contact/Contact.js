import React from "react";
import "./ContactCSS.css";

const Contact = () => {
  return (
    <>
      <div id="Contact" className="footer">
        <div className="footer-content">
          <div className="footer-ribbon">
            <div className="ribbon-top">AYUSH KUMAR SINGH</div>
            <div className="ribbon-bottom">A FULL-STACK DEVELOPER</div>
          </div>

          <div className="footer-icons">
            <p className="footer-find-text">You can find me here✌</p>
            <div className="icon-links">
              <a
                href="https://www.linkedin.com/in/ayush-kumar-singh-301a23296/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin footer-icon"></i>
              </a>
              <a
                href="https://github.com/AYUSHRAHUL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github footer-icon"></i>
              </a>
              <a href="220101130056@cutm.ac.in">
                <i className="fa-solid fa-envelope footer-icon"></i>
              </a>
              <a
                href="https://codolio.com/profile/Ayush_Kumar_Singh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-user footer-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-border">
          <p className="footer-text">
            2025 ❤️ © Designed and built by Ayush Kumar Singh.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
