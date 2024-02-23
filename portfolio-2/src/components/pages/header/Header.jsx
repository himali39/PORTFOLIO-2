import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import "./header.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  // const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const shouldAddClass = scrollPosition > 100;
    setIsSticky(shouldAddClass);

    // Get all the sections on the page
    const sections = document.querySelectorAll("section");

    // Find the section which is currently in view
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPosition >= sectionTop - sectionHeight / 3) {
        currentSection = section.id;
      }
    });

    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
    }

    // setShowScrollButton(scrollPosition > 500);
  };

  const handleNavClick = (section) => {
    handleScroll(); // Call handleScroll to update active section on click
    // Additional logic if needed for handling clicks
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="header" className={isSticky ? "sticky " : ""}>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto flex-column">
            <Nav.Link
              href="#banner"
              onClick={() => handleNavClick("banner")}
              className={activeSection === "banner" ? "active" : ""}
            >
              <div className="tooltip navbar-tooltip">
                <div className="side-nav-text">Home</div>
              </div>
            </Nav.Link>
            <Nav.Link
              href="#about"
              onClick={() => handleNavClick("about")}
              className={activeSection === "about" ? "active" : ""}
            >
              <div className="tooltip navbar-tooltip">
                <div className="side-nav-text">About</div>
              </div>
            </Nav.Link>
            <Nav.Link
              href="#services"
              onClick={() => handleNavClick("services")}
              className={activeSection === "services" ? "active" : ""}
            >
              <div className="tooltip navbar-tooltip">
                <div className="side-nav-text">Service</div>
              </div>
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              onClick={() => handleNavClick("portfolio")}
              className={activeSection === "portfolio" ? "active" : ""}
            >
              <div className="tooltip navbar-tooltip">
                <div className="side-nav-text">Portfolio</div>
              </div>
            </Nav.Link>
            <Nav.Link
              href="#blog"
              onClick={() => handleNavClick("blog")}
              className={activeSection === "blog" ? "active" : ""}
            >
              <div className="tooltip navbar-tooltip">
                <div className="side-nav-text">Blog</div>
              </div>
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => handleNavClick("contact")}
              className={activeSection === "contact" ? "active" : ""}
            >
              <div className="tooltip navbar-tooltip">
                <div className="side-nav-text">Contact</div>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Scroll to Top Button */}
      {/* {showScrollButton && (
        <Button
          className="d-flex scroll-to-top-button maincolor"
          onClick={scrollToTop}
        >
          &#8593;
        </Button>
      )} */}
    </section>
  );
};

export default Header;
