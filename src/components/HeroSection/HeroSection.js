import React, { useState, useEffect } from "react";
import "./HeroSectionCSS.css";
// import heroImage from "../../images/myPhoto1.jpg";
import { motion } from "framer-motion";
// import TechGlobe from "../TechGlobe/TechGlobe"
import  resume from "../../images/resume.pdf"
import profileImage from "../../images/ayush.png";


// Typing effect component
const TypingEffect = ({ text, speed, loop }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line
    let timeout;
    const typeText = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        if (loop) {
          timeout = setTimeout(() => {
            setDisplayedText("");
            setIndex(0);
          }, 2000);
        }
      }
    };

    const interval = setInterval(typeText, speed);

    return () => clearInterval(interval);
  }, [index, text, speed, loop]);

  return <motion.span>{displayedText}</motion.span>;
};

const HeroSection = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    const heroSection = document.querySelector(".hero-section");
    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* <div className="availability-badge shine-button">
        <div className="ping-dot" />
        <p>Available for new projects</p>
      </div> */}
      <div className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <TypingEffect text="Hi, I'm Ayush Kumar Singh." speed={200} loop={true} />
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          >
            I am FullStack Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          >
            I build things for the WEB.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1.7 }}
          >
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="join-button shine-button"
            >
              My Resume
            </a>
            <a href="220101130056@cutm.ac.in" className="contact-link shine-button">
              Mail Me
            </a>
          </motion.div>
        </div>




    <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 80,
                damping: 11
              }}
            >
              <motion.img 
                src={profileImage}
                alt="Profile"
                draggable="false"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 150 }}
              />
            </motion.div>
  
      </div>
    </div>
  );
};

export default HeroSection;
