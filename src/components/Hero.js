import React from "react";
import styled from "styled-components";
import { LuArrowUpRight } from "react-icons/lu";
import image from "../assets/image.png";

const Hero = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="top">
          <p className="hello">Hello 👋</p>
          <h1>
            I’am Sayed Irfan Sadat <br /> <span>3D Designer</span>
          </h1>
          <h3>
            Transforming Ideas into Engaging Visual Experiences, Crafting
            Immersive 3D Visuals and Engaging Graphic Designs, Creating Dynamic
            Motion Graphics
          </h3>
          <div className="bt-div">
            <a href="#" className="contact">
              Contact Me
            </a>
            <a href="#" className="portfolio">
              View Portfolios{" "}
              <span>
                <LuArrowUpRight />
              </span>
            </a>
          </div>
        </div>
        <div className="bottom">
          <div className="img-container">
            <img src={image} />
          </div>
          <div className="rec"></div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1em 3em;
  }

  .hello {
    text-align: center;
    font-size: 10px;
    border: 1px solid #4f46e5;
    border-radius: 50%;
    width: 62px;
    padding: 0.3em 0;
    margin-bottom: 0;
  }
  h1 {
    margin-top: 0.6em;
    color: #0b0c0c;
    text-align: center;
    font-size: 30px;
    font-family: Inter;
    font-style: normal;
    font-weight: 510;
    line-height: 1.5em; /* 162.5% */
    word-spacing: 2px;
    width: 364px;
  }

  span {
    color: #4f46e5;
  }

  h3 {
    color: #323433;
    text-align: center;
    font-family: Inter;
    font-size: 1em;
    font-weight: 400;
    line-height: 201%; /* 24.12px */
    width: 460px;
    margin-top: -0.5em;
  }

  .bt-div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
  }

  .contact,
  .portfolio {
    text-decoration: none;
    color: #000;
    margin-top: 0.5em;
    font-family: Inter;
  }

  .contact {
    border: 1px solid #4f46e5;
    padding: 0.5em 1em;
    border-radius: 2em;
    transition: all 0.3s linear;
    &:hover {
      background-color: #4f46e5;
      color: #fff;
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .img-container {
    position: relative;
    display: inline-block;
  }

  img {
    width: 470px;
    border-radius: 2px;
  }

  .img-container:before {
    content: "";
    position: absolute;
    top: 5.5em;
    left: 2.9em;
    width: 85%;
    height: 80.5%;
    background: linear-gradient(
      152deg,
      rgba(79, 70, 229, 0.5) 8.11%,
      #2c277f 91.89%
    );
    z-index: -1;
    pointer-events: none;
    border-radius: 2px;
  }

  .rec {
    /* width: 380px;
    height: 380px;
    flex-shrink: 0;
    border-radius: 2px;
    border: 5px solid var(--Primary-Color, #4f46e5);
    position: absolute;
    top: 36.5em;
    z-index: -1;
    left: 1.2em; */
    width: 380px;
    height: 380px;
    border-radius: 2px;
    border: 5px solid var(--Primary-Color, #4f46e5);
    position: absolute;
    top: 66%; /* Adjust this to position relative to the image */
    left: 43%; /* Centers relative to the container */
    transform: translate(-50%, -50%); /* Centers the element exactly */
    z-index: -1;
  }
`;

export default Hero;
