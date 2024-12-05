import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import star from "../assets/Shape.svg";
import user from "../assets/Ellipse 74.svg";
import user1 from "../assets/Ellipse 74 (1).svg";
import user2 from "../assets/Ellipse 74 (2).svg";
import { Testimonails } from "./data";


const Testimonails = () => {
  return (
    <Wrapper>
      <h1>Hear from our customers</h1>
      <div className="container">
        <div className="customer">
          <img src={star} />
          <p className="reveiew">
            We will also facilitate the business marketing of these products
            with our SEO experts so that they become a ready to use website &
            help sell product from company
          </p>
          <div className="user">
            <img src={user} alt="user" />
            <div className="user-info">
              <h3>Amir Uddin</h3>
              <p className="position">UX Designer </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
          <div className="customer">
            <img src={star} />
            <p className="reveiew">
              We will also facilitate the business marketing of these products
              with our SEO experts so that they become a ready to use website &
              help sell product from company
            </p>
            <div className="user">
              <img src={user} alt="user" />
              <div className="user-info">
                <h3>Amir Uddin</h3>
                <p className="position">UX Designer </p>
              </div>
            </div>
          </div>
        </div> */}
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

  .marquee {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2em;
    max-width: 9000px;
  }

  .reveiew {
    color: var(--Light-Text-Color-Title, #11142d);
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 120%; /* 16.8px */
    width: 418.211px;
  }

  @media (min-width: 1000px) {
    h1 {
      font-size: 40px;
      font-weight: 600;
    }
  }

  .container {
    width: 420px;
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
    line-height: 140%; /* 19.2px */
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
    line-height: 120%; /* 19.2px */
    letter-spacing: 0.08px;
    margin-bottom: -0.6em;
  }

  .position {
    color: #92929d;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 130%; /* 18.2px */
    letter-spacing: 0.112px;
  }
`;

export default Testimonails;
