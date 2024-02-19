import { Button, Container } from "react-bootstrap";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import bannerImage from "../../../img/banner.jpg";
import "./banner.css";

const Banner = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Designer", "Developer", "Freelancer"],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedElement.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="banner"
      className="banner route bg-image relative "
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="overlay-itro"></div>
      <div className="banner-content text-center">
        <Container>
          <p className="display-6 color-d text-white">Hello, world!</p>
          <h1 className="banner-title ">I am Mario Rossi</h1>
          <p className="banner-subtitle">
            <span className="banner-subtitle" ref={typedElement}></span>
          </p>
          <p className="pt-3 ">
            <Button
              href="#about"
              className="button-rouded  border-none maincolor"
            >
              More About Me
            </Button>
          </p>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
