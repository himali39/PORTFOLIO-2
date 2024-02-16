import React from "react";
import CountUp from "react-countup";
import "./counter.css";
import { Col, Container, Row } from "react-bootstrap";
import {
  BsAward,
  BsHandThumbsUp,
  BsJournalBookmark,
  BsPeople,
} from "react-icons/bs";

const Counter = () => {
  return (
    <div className="section-counter paralax-mf mt-5 bg-image">
      <div className="overlay-mf" />
      <Container className=" position-relative">
        <Row>
          <Col sm={3} lg={3}>
            <div className="counter-box counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle">
                  <BsHandThumbsUp />
                </span>
              </div>
              <div className="counter-num fs-4">
                <CountUp start={0} end={550} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
                <span className="counter-text fs-5">PROJECTS</span>
              </div>
            </div>
          </Col>
          <Col sm={3} lg={3}>
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle">
                  <BsJournalBookmark />
                </span>
              </div>
              <div className="counter-num fs-4">
                <CountUp start={0} end={10} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
                <span className="counter-text fs-5">HOURS OF SUPPORTS</span>
              </div>
            </div>
          </Col>
          <Col sm={3} lg={3}>
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle">
                  <BsPeople />
                </span>
              </div>
              <div className="counter-num fs-4">
                <CountUp start={0} end={15} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
                <span className="counter-text fs-5">CLIENTS</span>
              </div>
            </div>
          </Col>
          <Col sm={3} lg={3}>
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle">
                  <BsAward />
                </span>
              </div>
              <div className="counter-num fs-4">
                <CountUp start={0} end={50} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
                <span className="counter-text fs-5">AWARD WON</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Counter;
