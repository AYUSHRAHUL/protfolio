import React, { useState } from "react";
import "./ExperienceCSS.css";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "🧑‍💻  Frontend Developer Intern",
      organization: "Central Tool Room & Training Centre (CTTC), Bhubaneswar",
      duration: "June 2025",
      details:
        "As a Frontend Developer Intern at CTTC Bhubaneswar, I worked on modern web development projects aimed at improving internal tools and training platforms. My responsibilities included designing and implementing responsive user interfaces using HTML, CSS, and JavaScript, as well as integrating frontend components with backend APIs. I gained practical experience with frameworks like React.js and learned to follow industry best practices for UI/UX design, code optimization, and version control using Git. This internship provided a valuable opportunity to apply my frontend development skills in a real-world setting and collaborate with a technical team on impactful solutions.",
    },
    {
      role: "🎓 Campus Ambassador",
      organization: "Unstop",
      duration: "Oct 2024 - Present",
      details:
        "Working as a campus ambassador at Unstop has been an incredible journey of learning and collaboration. Being part of a team dedicated to creating opportunities for students in our respective colleges has taught me the value of outreach and community-building. Our responsibilities range from organizing events and workshops to providing a supportive platform for students to grow and connect. The teamwork involved in planning and executing these initiatives has been an enriching experience, enhancing my organizational, communication, and leadership skills. At Unstop, I've realized the power of creating a community that empowers students to explore, learn, and excel. This role has not only allowed me to contribute to my college but also to develop a sense of purpose and fulfillment in helping others succeed.",
    },
  ];

  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section id="Experience" className="experience-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <i className="fa-solid fa-business-time"></i> Experience
      </motion.h2>
      <motion.div
        className="experience-timeline"
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2, // Add staggered animation for items
            },
          },
        }}
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }} // Start from the left and invisible
            whileInView={{ opacity: 1, x: 0 }} // Move into place with full opacity
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.15 * index, // Delay between items
            }}
          >
            <div className="timeline-content">
              <h3>{experience.role}</h3>
              <p className="organization">{experience.organization}</p>
              <span className="duration">{experience.duration}</span>
              <p className="details">
                {expanded[index]
                  ? experience.details
                  : `${experience.details.substring(0, 250)}...`}{" "}
                <span
                  className="toggle-button"
                  onClick={() => toggleExpanded(index)}
                  style={{ color: "#0078d4", cursor: "pointer" }}
                >
                  {expanded[index] ? "See Less" : "See More"}
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
