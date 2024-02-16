import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import { Button } from "react-bootstrap";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldAddClass = scrollPosition > 0;
      setIsScrolled(shouldAddClass);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClose = () => {
    document.querySelector(".navbar-toggler").click();
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="header"
      className={`fixed-top ${isScrolled ? "header-scroll" : ""}`}
    >
      <Navbar expand="lg" className={isScrolled ? "bg-black" : ""}>
        <Container>
          <Navbar.Brand href="#banner" className="logo">
            Mario Rossi
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#banner" onClick={handleNavClose}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" onClick={handleNavClose}>
                About
              </Nav.Link>
              <Nav.Link href="#services" onClick={handleNavClose}>
                Service
              </Nav.Link>
              <Nav.Link href="#portfolio" onClick={handleNavClose}>
                Portfolio
              </Nav.Link>
              <Nav.Link href="#blog" onClick={handleNavClose}>
                Blog
              </Nav.Link>
              <Nav.Link href="#contact" onClick={handleNavClose}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
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
    </div>
  );
};

export default Header;
