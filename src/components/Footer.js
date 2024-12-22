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
    padding-bottom: 0.5em;
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

    .social {
      background-color: #2c277f;
      color: white;
      padding: 0.45em 0.5em 0em 0.5em;
      font-size: 0.6em;
      border-radius: 3em;
    }
  }
`;

export default Footer;
