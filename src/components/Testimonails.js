import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";

const Testimonails = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1>Hear About Us</h1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`

  h1 {
    text-align: center;
    margin-top: 2em;
    font-family: Inter;
    font-size: 30px;
    font-weight: 600;
    line-height: 78px; /* 260% */
    margin-bottom: 0;
  }

  @media (min-width: 1000px) {
    h1 {
      font-size: 40px;
      font-weight: 600;
    }
  }
`;

export default Testimonails;
