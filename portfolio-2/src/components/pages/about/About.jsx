import React from "react";
import "./about.css";
import aboutImage from "../../../img/about.jpg";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <Container>
        <Row>
          <Col sm={12}>
            <Col className="box-shadow-full pb-5 ">
              <Row>
                <Col md={6}>
                  <div className="about-img ">
                    <img
                      src={aboutImage}
                      className="img-fluid rounded b-shadow-a "
                      alt=""
                    />
                  </div>
                  <div className="about-info mt-4">
                    <p className="lead">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi commodi molestias minima.
                    </p>
                    <p>
                      <span className="title-s">Name: </span>
                      <span>Mario Rossi</span>
                    </p>
                    <p>
                      <span className="title-s">Birthday: </span>
                      <span>1 may 1998</span>
                    </p>
                    <p>
                      <span className="title-s">Profile: </span>
                      <span>full stack developer</span>
                    </p>
                    <p>
                      <span className="title-s">Email: </span>
                      <span>contact@example.com</span>
                    </p>
                    <p>
                      <span className="title-s">Phone: </span>
                      <span>518-331-1142</span>
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="title-box-2">
                    <h5 className="title-left fs-1">About me</h5>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s ">Skill</p>
                    <span>HTML</span> <span>85%</span>
                    <ProgressBar now={85} />
                    <span>CSS3</span> <span className="pull-right">75%</span>
                    <ProgressBar now={75} />
                    <span>PHP</span> <span className="pull-right">65%</span>
                    <ProgressBar now={75} />
                    <span>JAVASCRIPT</span>
                    <span className="pull-right"> 85%</span>
                    <ProgressBar now={90} />
                  </div>
                  <div className="about-me  pt-md-0">
                    <p className="title-s  mt-4">About more info</p>
                    <p className="lead ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi commodi molestias minima neque facilis eveniet
                      explicabo pariatur non cum earum iste voluptate magni
                      placeat, officiis odio, perferendis natus deserunt
                      delectus.
                    </p>

                    <p className="lead">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Repellendus incidunt, est temporibus ex nihil ut quae ad
                      recusandae consequatur natus?
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
