import React from "react";
import styled from "styled-components";
import { LuArrowUpRight } from "react-icons/lu";
import image from "../assets/image.png";
import { GrFacebookOption } from "react-icons/gr";
import { TfiLinkedin } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
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
      <div className="container" id="home">
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
            <a href="#contact" className="contact">
              Contact Me
            </a>
            <a href="#projects" className="portfolio">
              View Portfolios
              <span>
                <LuArrowUpRight />
              </span>
            </a>
          </div>
        </div>
        <div className="bottom">
          <div className="img-container">
            {/* // eslint-disable-next-line */}
            <img src={image} alt="i" />
          </div>
          <div className="follow">
            <p className="p">Follow me on: </p>
            {/* <div className="line"></div> */}
            <ul className="links">
              <a href="https://www.facebook.com" className="social">
                <GrFacebookOption />
              </a>
              <a href="https://www.x.com" className="social">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com" className="social">
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
margin-top: 2em 0;

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
    background: linear-gradient(90deg, rgba(79, 70, 229, 0.8) 0%, #2c277f 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h3 {
    color: #323433;
    text-align: center;
    font-family: Inter;
    font-size: 0.8em;
    font-weight: 400;
    line-height: 201%; /* 24.12px */
    width: 300px;
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
      background: linear-gradient(
        90deg,
        rgba(79, 70, 229, 0.8) 0%,
        #2c277f 100%
      );
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
    width: 310px;
    border-radius: 2px;
  }

  .img-container:before {
    content: "";
    position: absolute;
    top: 4.3em;
    left: 2em;
    width: 84%;
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
    width: 260px;
    top: 5.9em;
    left: .5em;
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

  /* .line {
    width: 3em;
    height: 1px;
    background-color: #4f46e5;
    margin-left: 2em;
  } */

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
    font-size: 30px;
    text-align: center;
    background: linear-gradient(90deg, rgba(79, 70, 229, 0.8) 0%, #2c277f 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .client {
    font-size: 24px;
    text-align: center;
    font-weight: 400;
    font-family: Poppins;
  }

  @media (min-width: 1000px) {
    .hello {
      margin-bottom: -1em;
    }

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

    /* .line {
      width: 1px;
      height: 3em;
      margin-left: -0.1em;
    } */

    .bottom-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-bottom: 3em;
    }

    .content {
      margin-top: 2em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .number {
      font-size: 34px;
      text-align: none;
    }

    .client {
      font-size: 20px;
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

    .bottom-container {
      margin-left: -1em;
    }
  }
`;

export default Hero;
