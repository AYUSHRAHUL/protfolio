import React from "react";
import "./ProjectCSS.css";
import Projectitem from "./Projectitem";

import cutm_result_portal from "../../images/projectImages/cutm_result_portal.png";
import job_khojo from "../../images/projectImages/job_khojo.png";
import exam_portal from "../../images/projectImages/exam_portal.png";

const Project = () => {
  const projectData = [
    {
      sourceCodeLink: "https://github.com/AYUSHRAHUL/cutm-result-portal",
      deployedLink: "https://result-rust.vercel.app/",
      name: "CUTM Result Portal",
      description:
        "The CUTM Result & Backlog Portal provides students with a simple and reliable way to check their academic results and track backlog status. With a clean interface and smooth navigation, it ensures hassle-free access to important academic information.",
      languages: "JavaScript | Flask | HTML | CSS | MongoDB | Mongoose  | REST API | Bootstrap | Tailwind CSS | Git & GitHub | Postman | JWT Authentication | Docker | Vercel",
      image: cutm_result_portal,
      projectType: "Result and backlog Management System",
    },
    {
      sourceCodeLink: "https://github.com/AYUSHRAHUL/job-khojo-nextjs",
      deployedLink: "https://job-khojo-nextjs.vercel.app/",
      name: "Job-Khojo",
      description:
      "Job-khojo is an innovative platform designed to bridge the gap between job seekers and employers, making the recruitment process more efficient, transparent, and engaging. It provides a single, user-friendly interface where candidates can showcase their skills and achievements, while employers can discover, evaluate, and connect with the right talent.",
      languages: "Nextjs |  MongoDB | Mongoose | React Router | JWT | Bcrypt | MERN Stack",
      image: job_khojo,
      projectType: "Real-Time Hiring Platform",
    },
    {
      sourceCodeLink: "https://github.com/AYUSHRAHUL/exam-portal",
      deployedLink: "https://exam-portal-nine-liart.vercel.app/",
      name: "Exam Portal",
      description:
        "The Exam Portal is a web-based platform that provides students with an interactive and efficient way to access all exam-related information. It ensures smooth navigation and clear visibility of schedules, results, and academic progress.",
      languages: "Next.js | JavaScript | TypeScript | HTML | CSS | Tailwind CSS | React.js | Node.js | Express.js | MongoDB | REST API | Git & GitHub | Firebase | Vercel | Postman | MERN Stack",
      image: exam_portal,
      projectType: "Advanced Exam Portal",
    },
    // {
    //   sourceCodeLink: "https://github.com/Saini-Yogesh/E-Commerce-Store",
    //   deployedLink: "https://github.com/Saini-Yogesh/E-Commerce-Store",
    //   name: "E-Commerce-Store",
    //   description:
    //     "E-Commerce Website is a modern shopping platform built with React, Node.js, Express.js, and MongoDB. It features user authentication, product browsing, shopping cart, secure payments (PayPal/Stripe), and an admin dashboard for managing inventory and orders. With a responsive design and seamless experience, it ensures smooth transactions.",
    //   languages: "React JS | Redux | Redux Toolkit | Node.js | Express.js | MongoDB | Mongoose | React Router | JWT | Bcrypt | Tailwind CSS | MERN Stack",
    //   image: eCommerceStore,
    //   projectType: "MERN-Based E-Commerce Platform",
    // },
  ];

  return (
    <>
      <div id="Projects" className="projects-section">
        <h2>
          <i className="fas fa-project-diagram"></i> Projects
        </h2>
        <div className="projects-container">
          {projectData.map((project, index) => (
            <Projectitem
              key={`${project.name}-${index}`}
              index={index}
              name={project.name}
              description={project.description}
              languages={project.languages}
              image={project.image}
              sourceCodeLink={project.sourceCodeLink}
              deployedLink={project.deployedLink}
              projectType={project.projectType}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
