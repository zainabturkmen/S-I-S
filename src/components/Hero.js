import React from "react";
import styled from "styled-components";
import { LuArrowUpRight } from "react-icons/lu";
import image from "../assets/image.png";
import { GrFacebookOption } from "react-icons/gr";
import { TfiLinkedin } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";
import { services } from "./data";

const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "3D Designer",
      "Graphic Designer",
      "Motion Designer",
      "Social Media Expert",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 90,
  });
  return (
    <Wrapper>
      <div className="container">
        <div className="top">
          <p className="hello">Hello 👋</p>
          <h1>
            I’am Sayed Irfan Sadat <br /> <span>{typeEffect}</span>
            <span
              style={{ fontSize: ".8em", color: "black", fontWeight: "300" }}>
              <Cursor />
            </span>
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
          <div className="follow">
            <p className="p">Follow me on: </p>
            <div className="line"></div>
            <ul className="links">
              <a href="#" className="social">
                <GrFacebookOption />
              </a>
              <a href="#" className="social">
                <FaTwitter />
              </a>
              <a href="#" className="social">
                <TfiLinkedin />
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        {services.map((service) => {
          const { id, number, text } = service;
          return (
            <div className="content" key={id}>
              <h1 className="number">{number}</h1>
              <p className="client">{text} </p>
            </div>
          );
        })}


      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2em 0;
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
    font-size: 0.8em;
    font-weight: 400;
    line-height: 201%; /* 24.12px */
    width: 390px;
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
    font-size: 0.9em;
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
    margin-left: 0.5em;
    padding-bottom: 2em;
  }

  .img-container {
    position: relative;
    display: inline-block;
  }

  img {
    width: 360px;
    border-radius: 2px;
  }

  .img-container:before {
    content: "";
    position: absolute;
    top: 5.1em;
    left: 2em;
    width: 88%;
    height: 76.8%;
    background: linear-gradient(
      152deg,
      rgba(79, 70, 229, 0.5) 8.11%,
      #2c277f 91.89%
    );
    z-index: -1;
    pointer-events: none;
    border-radius: 2px;
  }

  .img-container:after {
    content: "";
    position: absolute;
    width: 315px;
    top: 7em;
    left: 0em;
    height: 73%;
    border-radius: 2px;
    border: 5px solid var(--Primary-Color, #4f46e5);
    z-index: -1;
  }

  .follow {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    margin-right: 1em;
  }
  .p {
    background: var(
      --Primary-Color,
      linear-gradient(90deg, #4f46e5 0%, #2c277f 100%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .line {
    width: 3em;
    height: 1px;
    background-color: #4f46e5;
    margin-left: 2em;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;

    a {
      color: #fff;
      background: var(
        --Primary-Color,
        linear-gradient(90deg, #4f46e5 0%, #2c277f 100%)
      );
      padding: 0.3em 0.4em 0 0.4em;
      border-radius: 7px;
    }
  }

  .bottom-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content {
    margin-top: 2em;
  }

  .number {
    margin-bottom: -0.5em;
    color: #4f46e5;
    font-size: 30px;
    text-align: center;
  }

  .client {
    font-size: 28px;
    text-align: center;
  }

  @media (min-width: 1000px) {
    .container {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .top {
      align-items: start;
    }

    h1,
    h3 {
      text-align: start;
    }

    h3 {
      margin-top: -1.5em;
    }

    .bottom {
      margin-right: 2em;
      flex-direction: row;
    }

    .follow {
      flex-direction: column;
      gap: 1em;
      margin-top: 6em;
    }

    .p {
      writing-mode: vertical-lr;
    }
    ul {
      flex-direction: column;
      margin-left: -2em;
    }

    .line {
      width: 1px;
      height: 3em;
      margin-left: -0.1em;
    }

    .bottom-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 1em;
    }
  }

  @media (min-width: 1500px) {
    h1,
    h3 {
      text-align: start;
    }

    h1 {
      font-size: 2.8em;
      width: 500px;
    }

    h3 {
      font-size: 1em;
      width: 500px;
    }

    .contact,
    .portfolio {
      font-size: 1em;
    }
    .contact {
      padding: 0.8em 1.5em;
      /* border-radius: 6em; */
    }

    img {
      width: 400px;
      border-radius: 2px;
    }

    .img-container:before {
      top: 5.1em;
      left: 2em;
      width: 88%;
      height: 78.9%;
    }

    .img-container:after {
      width: 340px;
      top: 7em;
      left: 0em;
      height: 75%;
    }
  }
`;

export default Hero;
