import React from "react";
import "./contact.css";
import { Button, Col, Container, Form, Navbar, Row } from "react-bootstrap";
import {
  BsGeoAlt,
  BsTelephone,
  BsEnvelope,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";

const Contact = () => {
  return (
    <div
      id="contact"
      className="contact paralax-mf footer-paralax bg-image sect-mt4 route"
    >
      <div className="overlay-mf" />
      <Container>
        <Row>
          <Col sm={12}>
            <div className="mt-4">
              <div id="contact" className="box-shadow-full">
                <Row>
                  <Col md={6}>
                    <div className="title-box-2">
                      <h5 className="title-left">Send Message Us</h5>
                    </div>

                    <Form>
                      {/* your name */}
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control type="text" placeholder="Your Name" />
                      </Form.Group>
                      {/* end of code */}

                      {/* your subject */}
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control type="text" placeholder="Your Subject" />
                      </Form.Group>
                      {/* end of code */}

                      {/* your email */}
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control type="email" placeholder="Your Email" />
                      </Form.Group>
                      {/* end of the code */}

                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Message"
                        />
                      </Form.Group>
                    </Form>

                    <Col md={12} className="text-center">
                      <Button type="submit" className="button-rouded maincolor">
                        Send Message
                      </Button>
                    </Col>
                  </Col>
                  <Col md={6}>
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis dolorum dolorem soluta quidem expedita aperiam
                        aliquid at. Totam magni ipsum suscipit amet? Autem nemo
                        esse laboriosam ratione nobis mollitia inventore?
                      </p>
                      <ul className="list-ico">
                        <li>
                          <span>
                            <BsGeoAlt />
                          </span>
                          7140 S. Fordham St. Bronx, NY 10452
                        </li>
                        <li>
                          <span>
                            <BsTelephone />
                          </span>
                          518-331-1142
                        </li>
                        <li>
                          <span>
                            <BsEnvelope />
                          </span>
                          contact@example.com
                        </li>
                      </ul>
                    </div>
                    <div className="socials pt-3">
                      <ul>
                        <li>
                          <Navbar.Text className="ico-circle">
                            <a
                              href="https://www.facebook.com/"
                              target="_blank"
                              className="mt-2"
                            >
                              <BsFacebook />
                            </a>
                          </Navbar.Text>
                        </li>
                        <li>
                          <Navbar.Text className="ico-circle">
                            <a
                              href="https://www.instagram.com/"
                              target="_blank"
                            >
                              <BsInstagram />
                            </a>
                          </Navbar.Text>
                        </li>
                        <li>
                          <Navbar.Text className="ico-circle">
                            <a href="https://www.twitter.com/" target="_blank">
                              <BsTwitter />
                            </a>
                          </Navbar.Text>
                        </li>
                        <li>
                          <Navbar.Text className="ico-circle">
                            <a href="https://www.linkedin.com/" target="_blank">
                              <BsLinkedin />
                            </a>
                          </Navbar.Text>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
