import React from "react";
import portImg1 from "../../../img/portfolio-1.jpg";
import portImg2 from "../../../img/portfolio-2.jpg";
import portImg3 from "../../../img/portfolio-3.jpg";
import portImg4 from "../../../img/portfolio-4.jpg";
import portImg5 from "../../../img/portfolio-5.jpg";
import portImg6 from "../../../img/portfolio-6.jpg";
import PortfolioBox from "./PortfolioBox";
import { Col, Container, Row } from "react-bootstrap";
import "../portfolio/portfolio.css";
import Testimonial from "../testimonials/Testimonial";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-mf sect-pt4 route">
      <Container>
        <Row>
          <Col sm={12}>
            <div className="text-center">
              <h3 className="title-a mb-0 title-left ">Portfolio</h3>
              <p className="subtitle-a mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="line-mf" />
            </div>
          </Col>
        </Row>
        <Row>
          <PortfolioBox
            img={portImg1}
            title="Loreda Cuno Nere"
            category="Web Design"
          />
          <PortfolioBox
            img={portImg2}
            title="Nobis et tempore"
            category="Graphic Design"
          />
          <PortfolioBox
            img={portImg3}
            title="Curabitu arcu erat"
            category="Web Developer"
          />
          <PortfolioBox
            img={portImg4}
            title="porttitor at sem"
            category="Web Developer"
          />
          <PortfolioBox
            img={portImg5}
            title="Studio Lena Mado"
            category="Web Developer"
          />
          <PortfolioBox
            img={portImg6}
            title="Curabitu arcu erat"
            category="Web Developer"
          />
        </Row>
      </Container>
      <Testimonial />
    </div>
  );
};

export default Portfolio;
