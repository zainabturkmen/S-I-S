import React from "react";
import styled from "styled-components";
import { testimonails } from "./data";
import Marquee from "react-fast-marquee";

const Testimonails = () => {
  return (
    <Wrapper id="testimonails">
      <h1>Testimonails</h1>
      <div className="main-container">
        <Marquee className="marquee" pauseOnHover speed={50} loop={0}>
          {testimonails.map((testimonail) => {
            const { id, star, text, user, name, position } = testimonail;
            return (
              <div className="container" key={id}>
                <div className="customer">
                  <img src={star} alt="stars"/>
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
        </Marquee>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    font-weight: 600;
    font-size: 30px;
    text-align: center;
    margin-top: 2em;
  }

  .main-container {
    display: flex;
    flex-direction: row;
    /* max-width: 1250px; */
    /* margin: 0 auto; */
  }

  .container {
    width: 185px;
    height: 260px;
    border-radius: 8px;
    background-color: red;
    padding: 2em;
    background: var(--Light-Base-Color-White, #fff);
    filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.2));
    margin: 1em;
  }

  .reveiew {
    color: #11142d;
    font-family: Inter;
    font-size: 16px;
    font-weight: 300;
    line-height: 140%;
    width: 200px;
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

  @media (min-width: 600px) {
    .main-container {
      display: flex;
      flex-direction: row;
      max-width: 1250px;
      margin: 0 auto;
    }

    h1 {
      text-align: center;
      margin-top: 2em;
      font-family: Inter;
      line-height: 78px;
      margin-bottom: 0;
      font-size: 40px;
      font-weight: 600;
    }

    .container {
      width: 400px;
      height: 177px;
      border-radius: 8px;
      background-color: red;
      padding: 2em;
      background: var(--Light-Base-Color-White, #fff);
      filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.2));
      margin: 1em;
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
  }
`;

export default Testimonails;
