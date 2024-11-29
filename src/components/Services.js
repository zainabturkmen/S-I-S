import React from "react";
import styled from "styled-components";
import { MdGraphicEq } from "react-icons/md";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="sub-container">
          <div className="icon">
            <MdGraphicEq />
          </div>
          <h3>Graphic Design</h3>
          <p>We provide Graphic Design services, with the best designers</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .sub-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
`;

export default Services;
