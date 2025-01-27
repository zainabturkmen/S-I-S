import React from "react";
import styled from "styled-components";
import { testimonails } from "./data";
import Marquee from "react-fast-marquee";

const Testimonails = () => {
  return (
    <Wrapper id="experience">
      <h1>Experience</h1>
      <div className="main-container">
        <Marquee className="marquee" pauseOnHover speed={50} loop={0}>
          {testimonails.map((testimonail) => {
            const { id, company, text, user, name, position } = testimonail;
            return (
              <div className="container" key={id}>
                <div className="customer">
                  <h2>{company}</h2>
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

  h2 {
    font-size: 1.2em;
    font-weight: 400;
  }
  .main-container {
    display: flex;
    flex-direction: row;
    /* max-width: 1250px; */
    /* margin: 0 auto; */
  }

  .container {
    width: 250px;
    height: 340px;
    border-radius: 8px;
    background-color: red;
    padding: 1em 2em;
    background: var(--Light-Base-Color-White, #fff);
    filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.2));
    margin: 1em;
  }

  .marquee {
    height: 600px;
  }

  .reveiew {
    color: #11142d;
    font-family: Inter;
    font-size: 16px;
    font-weight: 300;
    line-height: 140%;
    width: 260px;
  }

  .user {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
  }
  img {
    width: 5em;
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
    .marquee {
      height: 400px;
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
      height: 257px;
      border-radius: 8px;
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
