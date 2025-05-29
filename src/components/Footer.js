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
            <p>
              Design and Developed by{" "}
              <a
                className="developer-link"
                href="https://www.linkedin.com/in/zainab-turkmen-719183271"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zainab Turkmen
              </a>
            </p>
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
    flex-direction: column-reverse; /* reverse order on mobile */
    justify-content: center;
    align-items: center;
    margin: 1em 2.5em;
    gap: 1em;
    text-align: center;
  }

  .date {
    p {
      font-size: 0.8em;
      font-weight: 400;
      line-height: 1.4;
      margin: 0.2em 0;
    }

    .developer-link {
      color: #2c277f;
      text-decoration: none;
      font-weight: 600;
    }

    .developer-link:hover {
      text-decoration: underline;
    }
  }

  .links {
    display: flex;
    gap: 1em;

    a {
      background-color: #2c277f;
      color: white;
      padding: 0.6em 0.7em;
      font-size: 0.8em;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s;
    }

    a:hover {
      background-color: #443fc9;
    }
  }

  @media (min-width: 768px) {
    .main-footer {
      flex-direction: row; /* restore normal order on desktop */
      justify-content: space-between;
      text-align: left;
    }

    .date p {
      font-size: 1em;
    }

    .links a {
      font-size: 1em;
      padding: 0.9em;
    }
  }
`;


export default Footer;

