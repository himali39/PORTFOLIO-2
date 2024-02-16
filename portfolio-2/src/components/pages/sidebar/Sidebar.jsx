import React from "react";
import { motion } from "framer-motion";
import Nav from "react-bootstrap/Nav";
import profileImg from "../../../Images/profile.png";
import "./sidebar.css";
import github from "../../../Images/github.png";
import linkedin from "../../../Images/linkedin.png";
import instagram from "../../../Images/instagram.png";
import gmail from "../../../Images/gmail.png";
import twitter from "../../../Images/twitter.png";

const Sidebar = () => {
    const container = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.3,
        },
      },
    };
    const iconList = [
      {
        component: github,
        href: "https://www.github.com",
      },
      {
        component: linkedin,
        href: "https://www.linkedin.com",
      },
      {
        component: twitter,
        href: "https://www.twitter.com",
      },
      {
        component: instagram,
        href: "https://www.instagram.com",
      },
      {
        component: gmail,
        href: "mailto:mittalsam98@gmail.com",
      },
    ];
    const item = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
      },
    };
  return (
    <div className="sidebar">
      <h1>
        <Nav.Link smooth to="#" className="h1_links">
          Simone Greco
        </Nav.Link>
      </h1>
      <motion.div
        animate={{ x: [4, -5] }}
        transition={{
          ease: "linear",
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <img src={profileImg} className="my-img" />
      </motion.div>
      <p className="gmail font-semibold text-md mt-4 ">
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL"
          target="_blank"
          className="fa fa-envelope"
        ></a>
        &nbsp;simonegreco123@gmail.com
      </p>
      <ul className="sidebar-nav ms-4 mt-5 text-center">
        <li className="sidebar-nav-items mb-3">
          <Nav.Link smooth to="" className="links ">
            Projects
          </Nav.Link>
        </li>

        <li className="sidebar-nav-items mb-3">
          <Nav.Link smooth to="" className="links">
            About
          </Nav.Link>
        </li>

        <li className="sidebar-nav-items mb-3">
          <Nav.Link smooth to="" className="links">
            Interest
          </Nav.Link>
        </li>

        <li className="sidebar-nav-items mb-3">
          <Nav.Link smooth to="" className="links">
            Education
          </Nav.Link>
        </li>
      </ul>
      <div>
        <motion.ul
          className="sidebar-nav "
          variants={container}
          // initial="hidden"
          animate="visible"
        >
          {iconList.map((val, index) => (
            <motion.li key={index} variants={item}>
              <img
                onClick={() => {
                  window.open(val.href, "_blank");
                }}
                src={val.component}
                className="icon-img d-inline-block"
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="color-black font-semibold pt-5 ">
        Made with <a href="#" className="fa fa-heart heart"></a> by idea2code.
      </div>
    </div>
  );
};

export default Sidebar;
