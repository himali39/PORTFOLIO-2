import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={12}>
            <div className="copyright-box">
              <p className="copyright">
                ©
                <a
                  href="https://idea2codeinfotech.com/"
                  className="text-decoration-none ms-1"
                  target="_blank"
                >
                  <strong>idea2codeinfotech.</strong>
                </a>
                All Rights Reserved
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
