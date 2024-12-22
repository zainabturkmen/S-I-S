import React from "react";
import styled from "styled-components";
import { GrFacebookOption } from "react-icons/gr";
import { TfiLinkedin } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <div className="footer">
        <hr className="hr" />
        <div className="main-footer">
          <div className="date">
            <p>&copy; {currentYear}. All Rights Reserved</p>
          </div>
          <ul className="links">
            <a href="https://www.facebook.com">
              <GrFacebookOption />
            </a>
            <a href="https://www.x.com">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com">
              <TfiLinkedin />
            </a>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .footer {
    margin-bottom: -0.8em;
  }
  .main-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 2.5em;
    align-items: center;
  }

  p {
    font-size: 0.7em;
    font-weight: 400;
    padding-top: 0.8em;
  }

  .links {
    display: flex;
    flex-direction: row;
    gap: 1.5em;

    a {
      background-color: #2c277f;
      color: white;
      padding: 0.45em 0.5em 0em 0.5em;
      font-size: 0.6em;
      border-radius: 3em;
    }
  }

  @media (min-width: 1150px) {
    a {
      padding: 2em;
      font-size: 1em;
      border-radius: 3em;
    }

    p {
      font-size: 1em;
    }
  }
`;

export default Footer;
