import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="testimonial">
      <div className="container">
        <h2>TESTIMONIALS</h2>
        <Slider {...settings}>
          <div className="testimonial-item">
            <img src="https://i.ibb.co/G7YQVdt/tast1-1.jpg" alt="" />
            <blockquote>
              <p>
                Great experience, was very good and the sale took place very
                quick and was able to secure transportation 2 days after the
                purchase. Car got the my home in a timely fashion.
              </p>
            </blockquote>
            <strong>-Thomas Leo</strong>
          </div>
          <div className="testimonial-item">
            <img src="https://i.ibb.co/SVg6S8y/tast1.jpg" alt="" />
            <blockquote>
              <p>
                Amazing service at the service department! Especially from . She
                took care of our cars and provided 5 star service at every step!
              </p>
            </blockquote>
            <strong>-Lua Max</strong>
          </div>
          <div className="testimonial-item">
            <img src="https://i.ibb.co/8zKxykx/tast1-2.jpg" alt="" />
            <blockquote>
              <p>
                I had a great experience at (CD). Found the exact car I wanted
                in tip-top shape at a fair price with excellent customer service
                and attention-to-detail. I highly recommend this dealership.
              </p>
            </blockquote>
            <strong>-Robart Boyo</strong>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
