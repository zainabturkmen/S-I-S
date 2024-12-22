import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { LiaTimesSolid } from "react-icons/lia";
import { links } from "./data";
import { GrFacebookOption } from "react-icons/gr";
import { TfiLinkedin } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";

const Sidebar = ({ toggleSidebar, isOpen }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <aside className={`${isOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <div>
          <div className="sidebar-header">
            <h1>Sayed Irfan</h1>
            <button className="times" onClick={toggleSidebar}>
              <LiaTimesSolid />
            </button>
          </div>
          <ul>
            {links.map((link) => {
              const { id, text, url, icon } = link;
              return (
                <li key={id}>
                  <span>{icon}</span>
                  <Link
                    to={url}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={toggleSidebar}
                    className="link">
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="sidebar-footer">
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
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    transition: all 0.3s linear;
    transform: translate(-100%);
    box-shadow: 0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25),
      0.125em 0.125em 0.25em rgba(0, 0, 0, 0.15);
    z-index: -1;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 2.2em;

    h1 {
      font-family: "Edu AU VIC WA NT Pre", cursive;
      font-weight: 500;
      color: blue;
      font-size: 1.8em;
      background: var(
        --Primary-Color,
        linear-gradient(90deg, #4f46e5 0%, #2c277f 100%)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .times {
      border: none;
      background-color: transparent;
      font-size: 2em;
      margin-top: 0.3em;
      cursor: pointer;
      &:hover {
        color: #2d24c3;
      }
    }
  }

  hr {
    margin: -1em 1em;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 2.5em;
    margin-top: 2em;
    /* margin-bottom: 3em; */
  }

  li {
    list-style: none;
    display: flex;
    transition: all 0.3s linear;
    &:hover {
      color: #2c277f;
      padding-left: 1em;
    }
  }

  .link {
    text-decoration: none;
    color: #000;
    font-size: 1.5em;
    cursor: pointer;
    &:hover {
      color: #2c277f;
    }
  }

  span {
    padding-right: 0.7em;
    font-size: 1.9em;
  }

  .sidebar-footer {
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

export default Sidebar;
