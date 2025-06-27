import React from "react";
import { motion } from "framer-motion";
import "./certificate.css";
import geeksforgeeks from "../../images/certificate/geeksforgeeks.jpeg";
import java from "../../images/certificate/java.jpeg"
import AI from "../../images/certificate/generative ai studio.png"
import machine_learning from "../../images/certificate/machine learning.jpeg"
import sql from "../../images/certificate/sql.jpeg"


const certificates = [
  {
    title: "Programing in Java (NPTEL)",
    image: java,
    link: java,
  },
  {
    title: "160 Day Problem Solving (GeeksforGeeks)",
    image: geeksforgeeks,
    link: geeksforgeeks,
  },
  // Add more certificates here...
   {
    title: "Introduction to Generative AI Studio",
    image: AI,
    link: AI,
  },
  {
    title: "Introduction to Machine Learning (NPTEL)",
    image: machine_learning,
    link: machine_learning,
  }, {
    title: "SQL(HACKER RANK)",
    image: sql,
    link: sql,
  },
];

const Certificate = () => {
  return (
    <section className="certificate-section">
      <motion.h2
        className="certificate-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🏆 My Certificates
      </motion.h2>

      <div className="certificate-grid">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="certificate-card"
            whileHover={{ scale: 1.05 }}
          >
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <img src={cert.image} alt={cert.title} />
              <p>{cert.title}</p>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
