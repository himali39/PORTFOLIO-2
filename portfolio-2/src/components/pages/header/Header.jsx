import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import { Button } from "react-bootstrap";
import {
  FaBriefcase,
  FaCogs,
  FaComments,
  FaFolder,
  FaHome,
  FaUser,
} from "react-icons/fa";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleNavClose = () => {
    document.querySelector(".navbar-toggler").click();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="header" className={isSticky ? "sticky" : ""}>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto flex-column">
            <Nav.Link href="#banner" onClick={handleNavClose}>
              <FaHome />
            </Nav.Link>
            <Nav.Link href="#about" onClick={handleNavClose}>
              <FaUser />
            </Nav.Link>
            <Nav.Link href="#services" onClick={handleNavClose}>
              <FaCogs />
            </Nav.Link>
            <Nav.Link href="#portfolio" onClick={handleNavClose}>
              <FaBriefcase />
            </Nav.Link>
            <Nav.Link href="#blog" onClick={handleNavClose}>
              <FaFolder />
            </Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavClose}>
              <FaComments />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* Scroll to Top Button */}
      <Button
        className="d-flex scroll-to-top-button maincolor"
        onClick={scrollToTop}
      >
        &#8593;
      </Button>
    </div>
  );
};

export default Header;
