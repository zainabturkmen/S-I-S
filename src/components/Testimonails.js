import React, { Fragment } from "react";
import styled from "styled-components";
import { testimonails } from "./data";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BiArrowToRight } from "react-icons/bi";
import { BiArrowToLeft } from "react-icons/bi";

const Testimonails = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow" onClick={onClick}>
        <BiArrowToRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow-left" onClick={onClick}>
        <BiArrowToLeft />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3, // Number of visible slides
    centerMode: true, // Enable centering
    centerPadding: "50px", // Adjust space around the centered slide
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Wrapper>
      <h1>Hear from our customers</h1>
      <div className="main-div">
        <Slider {...settings}>
          {testimonails.map((testimonail) => {
            const { id, star, text, user, name, position } = testimonail;
            return (
              <div className="container" key={id}>
                <div className="customer">
                  <img src={star} />
                  <p className="reveiew">{text}</p>
                  <div className="user">
                    <img src={user} alt="user" />
                    <div className="user-info">
                      <h3>{name}</h3>
                      <p className="position">{position}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main-div {
    display: flex;
    justify-content: center; /* Center the slider horizontally */
    align-items: center; 
  }

  .slick-slider {
    width: 100%; /* Adjust width to create white space */
    max-width: 1250px;
  }

  .slick-slide {
    padding: 10px; /* Space around individual slides */
  }

  h1 {
    text-align: center;
    margin-top: 2em;
    font-family: Inter;
    font-size: 30px;
    font-weight: 600;
    line-height: 78px;
    margin-bottom: 0;
  }

  .reveiew {
    color: var(--Light-Text-Color-Title, #11142d);
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 120%;
    width: 418.211px;
  }

  .container {
    width: 400px;
    height: 177px;
    border-radius: 8px;
    background-color: red;
    padding: 2em;
    background: var(--Light-Base-Color-White, #fff);
    filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.2));
  }

  .reveiew {
    color: #11142d;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    width: 418.211px;
  }

  .user {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
  }

  h3 {
    color: #11142d;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.08px;
    margin-bottom: -0.6em;
  }

  .position {
    color: #92929d;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: 0.112px;
  }

  @media (min-width: 1000px) {
    h1 {
      font-size: 40px;
      font-weight: 600;
    }
  }
`;

export default Testimonails;
