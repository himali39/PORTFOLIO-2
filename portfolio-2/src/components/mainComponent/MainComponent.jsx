import React, { useState } from "react";
import Header from "../pages/header/Header";
import Banner from "../pages/banner/Banner";
import About from "../pages/about/About";
import Service from "../pages/service/Service";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";
import Blog from "../pages/blog/Blog";
import Footer from "../pages/footer/Footer";
import { useEffect } from "react";

const MainComponent = () => {

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const customCursor = document.getElementById("customCursor");
    const links = document.querySelectorAll("a");

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      customCursor.style.transform = `translate(${x}px, ${y}px) scale(${
        isHovered ? 2 : 1
      })`;
    };

    const handleLinkHover = () => {
      setIsHovered(true);
    };

    const handleLinkLeave = () => {
      setIsHovered(false);
    };

    document.addEventListener("mousemove", handleMouseMove);

    links.forEach((link) => {
      link.addEventListener("mouseover", handleLinkHover);
      link.addEventListener("mouseout", handleLinkLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);

      links.forEach((link) => {
        link.removeEventListener("mouseover", handleLinkHover);
        link.removeEventListener("mouseout", handleLinkLeave);
      });
    };
  }, [isHovered]);

  return (
    <>
      <div
        id="customCursor"
        className={`zoom-cursor ${isHovered ? "hovered" : ""}`}
      ></div>
      <Header />
      <Banner />
      <About />
      <Service />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default MainComponent;
