import React from "react";
import { Col, Row } from "react-bootstrap";
import "../portfolio/portfolio.css";

const PortfolioBox = ({ img, title, category }) => {
  return (
    <Col md={4} className="portfolio-item">
      <div className="portfolio-content">
        <div className="portfolio-hover">
          {<img src={img} className="img-fluid" alt="" />}
          <div className="portfolio-info">
            <h4>{title}</h4>
            <p>{category}</p>
            <a
              href=""
              data-gallery="portfolioGallery"
              className="portfolio-lightbox preview-link"
            ></a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default PortfolioBox;
