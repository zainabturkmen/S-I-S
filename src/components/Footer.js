import React from "react";
import styled from "styled-components";
import { GrFacebookOption } from "react-icons/gr";
import { TfiLinkedin } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";

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
            <a href="https://www.facebook.com/share/15tzARYMJG/?mibextid=wwXIfr">
              <GrFacebookOption />
            </a>
            <a href="https://www.instagram.com/sayedirfan.sadat?igsh=a3l1czV1cjdlNnln&utm_source=qr">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/sayed-irfan-sadat-335890310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
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
    margin: 1em;
  }
  .main-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 2.5em;
    align-items: center;
  }

  p {
    font-size: 0.5em;
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
      padding: 0.5em 0.6em 0.15em 0.6em;
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
