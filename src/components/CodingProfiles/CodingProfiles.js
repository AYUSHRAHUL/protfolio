import React from "react";
import { motion } from "framer-motion";
import "./CodingProfileCSS.css";

const CodingProfilesSection = () => {
  const codingProfiles = [
    {
      link: "https://leetcode.com/u/AYUSH_KUMAR_SINGH7979/",
      icon: "https://cdn-1.webcatalog.io/catalog/leetcode/leetcode-social-preview.png?v=1714774949349",
    },
    {
      link: "https://www.codechef.com/users/school_awe_51",
      icon: "https://pbs.twimg.com/profile_images/1477930785537605633/ROTVNVz7_400x400.jpg",
    },
    {
      link: "https://codeforces.com/profile/Ayush_kumar_Singh7979",
      icon: "https://cdn-1.webcatalog.io/catalog/codeforces/codeforces-social-preview.png?v=1714773964567",
    },
    {
      link: "https://www.geeksforgeeks.org/user/user_qpc7lznc26q/",
      icon: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png",
    },
 
  ];

  return (
    <div id="Coding-profiles" className="coding-profiles-section">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <i className="fa-solid fa-code"></i> My Programming Profiles
      </motion.h2>

      <motion.div
        className="coding-profiles-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "linear",
        }}
      >
        {codingProfiles.map((profile, index) => (
          <motion.a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="coding-profile-link"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.1 * index,
            }}
          >
            <img
              draggable="false"
              src={profile.icon}
              alt={`Platform ${index + 1} icon`}
              className="coding-profile-icon"
            />
          </motion.a>
        ))}

      </motion.div>
    </div>
  );
};

export default CodingProfilesSection;
