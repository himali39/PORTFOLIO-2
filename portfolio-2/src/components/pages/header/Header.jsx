import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const sections = [
      "banner",
      "about",
      "services",
      "portfolio",
      "blog",
      "contact",
    ];

    // Find the section that is currently in view based on its position
    const foundSection = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 50 && rect.bottom >= 50;
      }
      return false;
    });

    // Update the active section state
    // Update active section only if a section is found
    if (foundSection) {
      setActiveSection(foundSection);
    } else {
      // If no section is found, remove active class from all nav links
      setActiveSection("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="header">
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto flex-column">
            <Nav.Link href="#banner" active={activeSection === "banner"}>
              <div className="tooltip navbar-tooltip">
                <div className="side-nav-text">Home</div>
              </div>
            </Nav.Link>
            <Nav.Link href="#about" active={activeSection === "about"}>
              <div className="tooltip navbar-tooltip">
                <div className="side-nav-text">About</div>
              </div>
            </Nav.Link>
            <Nav.Link href="#services" active={activeSection === "services"}>
              <div className="tooltip navbar-tooltip">
                <div className="side-nav-text">Service</div>
              </div>
            </Nav.Link>
            <Nav.Link href="#portfolio" active={activeSection === "portfolio"}>
              <div className="tooltip navbar-tooltip">
                <div className="side-nav-text">Portfolio</div>
              </div>
            </Nav.Link>
            <Nav.Link href="#blog" active={activeSection === "blog"}>
              <div className="tooltip navbar-tooltip">
                <div className="side-nav-text">Blog</div>
              </div>
            </Nav.Link>
            <Nav.Link href="#contact" active={activeSection === "contact"}>
              <div className="tooltip navbar-tooltip">
                <div className="side-nav-text">Contact</div>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
};

export default Header;
