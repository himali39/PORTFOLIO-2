import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from "react-bootstrap";
import testimonialImg1 from "../../../img/testi-1.jpg";
import testimonialImg2 from "../../../img/testi-2.jpg";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import "./testimonial.css";
SwiperCore.use([Pagination, Autoplay]);

const Testimonial = () => {
  return (
    <div id="testimonial" className="testimonial paralax-mf mt-5 bg-image">
      <div className="overlay-mf" />
      <Container>
        <Row>
          <Col md={12}>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              loop={true}
            >
              <SwiperSlide>
                <div className="testimonial-box">
                  <div className="author-test">
                    <img src={testimonialImg1} className="rounded-circle" />
                    <span className="author">Kelly Adams</span>
                  </div>

                  <div className="content-test">
                    <p className="description lead">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ullam, id iusto. Eveniet distinctio repellendus mollitia.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-box">
                  <div className="author-test">
                    <img
                      src={testimonialImg2}
                      alt=""
                      className="rounded-circle b-shadow-a"
                    />
                    <span className="author">Zavi Alonso</span>
                  </div>

                  <div className="content-test">
                    <p className="description lead">
                      Curabitur arcu erat, accumsan id imperdiet et, porttitor
                      at sem. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
