import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import "./header.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

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
            const shouldAddClass = scrollPosition > 100;
      setIsSticky(shouldAddClass);
       setIsScrolled(shouldAddClass);

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

      // Update the active section state
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="header" className={isSticky ? "sticky" : ""}>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto flex-column">
            <Nav.Link
              href="#banner"
              onClick={() => handleNavClose("banner")}
              className={activeSection === "banner" ? "active" : ""}
            >
              <div className="tooltip navbar-tooltip">
                <div className="side-nav-text">Home</div>
              </div>
            </Nav.Link>
            <Nav.Link
              href="#about"
              onClick={() => handleNavClose("about")}
              className={activeSection === "about" ? "active" : ""}
            >
              <div className="tooltip navbar-tooltip">
                <div className="side-nav-text">About</div>
              </div>
            </Nav.Link>
            <Nav.Link
              href="#services"
              onClick={() => handleNavClose("services")}
              className={activeSection === "services" ? "active" : ""}
            >
              <div className="tooltip navbar-tooltip">
                <div className="side-nav-text">Service</div>
              </div>
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              onClick={() => handleNavClose("portfolio")}
              className={activeSection === "portfolio" ? "active" : ""}
            >
              <div className="tooltip navbar-tooltip">
                <div className="side-nav-text">Portfolio</div>
              </div>
            </Nav.Link>
            <Nav.Link
              href="#blog"
              onClick={() => handleNavClose("blog")}
              className={activeSection === "blog" ? "active" : ""}
            >
              <div className="tooltip navbar-tooltip">
                <div className="side-nav-text">Blog</div>
              </div>
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => handleNavClose("contact")}
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
      {isScrolled && (
        <Button
          className="d-flex scroll-to-top-button maincolor"
          onClick={scrollToTop}
        >
          &#8593;
        </Button>
      )}
    </section>
  );
};

export default Header;
