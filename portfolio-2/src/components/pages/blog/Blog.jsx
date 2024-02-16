import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./blog.css";
import BlogBox from "./BlogBox";
import blog1 from "../../../img/blog1.jpg";
import blog2 from "../../../img/blog2.jpg";
import blog3 from "../../../img/blog3.jpg";
import authorImg from "../../../img/about.jpg";

const Blog = () => {
  return (
    <div id="blog" className="blog-mf sect-pt4 route">
      <Container>
        <Row>
          <Col sm={12}>
            <div className="title-box text-center">
              <h3 className="title-a title-left mb-0">Blog</h3>
              <p className="subtitle-a mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="line-mf" />
            </div>
          </Col>
        </Row>
        <Row>
          <BlogBox
            img={blog1}
            category="Marketing"
            title="See more ideas about Marketing"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fuga porro asperiores commodi consectetur voluptate repellendus. Nam dolore dolor cumque."
            footerImg={authorImg}
            min="12 min"
          />
          <BlogBox
            img={blog2}
            category="Travel"
            title="See more ideas about Travel"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fuga porro asperiores commodi Dignissimos fuga consectetur voluptate repellendus dolor yu. "
            footerImg={authorImg}
            min="8 min"
          />
          <BlogBox
            img={blog3}
            category="Development"
            title="See more ideas about Development"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fuga porro asperiores commodi consectetur voluptate repellendus. Nam dolore dolor cumque."
            footerImg={authorImg}
            min="12 min"
          />
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
