import React from "react";
import styled from "styled-components";
import { MdGraphicEq } from "react-icons/md";
import { useState } from "react";
import Slider from "react-slick";
import { services2 } from "./data";

const Services = () => {
  return (
    <Wrapper>
      <h1>My Services</h1>
      <div className="container">
        {services2.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <div className="sub-container" key={id}>
              <div className="icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3em;
  }

  h1 {
    text-align: center;
    margin-top: 3em;
    font-family: Inter;
    font-size: 30px;
    font-weight: 600;
    line-height: 78px; /* 260% */
  }
  .sub-container {
    display: flex;
    flex-direction: column;
    justify-content: center; /* font-size: 30px; */
    align-items: center;
  }

  .icon {
    background-color: #5454d41a;
    color: #5454d4;
    padding: 0.2em 0.4em 0 0.4em;
    text-align: center;
    border-radius: 50%;
    font-size: 2em;
    margin-bottom: -0.1em;
  }

  h3 {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.75px;
    margin-bottom: 0.5em;
  }

  p {
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 175% */
    width: 300px;
    margin-top: 0;
  }

  @media (min-width: 1000px) {
    .container {
      flex-wrap: wrap;
      flex-direction: row;
      gap: 5em;
    }

    h1 {
      font-size: 40px;
      font-weight: 600;
      margin-top: 2em;
    }
  }

  @media (min-width: 1400px) {
    .container {
      flex-wrap: wrap;
      flex-direction: row;
      column-gap: 12em;
      row-gap: 5em;
      width: 1300px;
      margin: 0 auto;
      margin-top: 4em;
    }
  }
`;

export default Services;
