import React from "react";
import styled from "styled-components";
import { LiaTimesSolid } from "react-icons/lia";
import { links } from "./data";

const Sidebar = () => {
  const currentYear = new Date().getFullYear();

  const isOpen = true;
  return (
    <Wrapper>
      <aside className={`${isOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <div className="sidebar-header">
          <h1>Sayed Irfan</h1>
          <button className="times">
            <LiaTimesSolid />
          </button>
        </div>
        <ul>
          {links.map((link) => {
            const { id, text, url, icon } = link;
            return (
              <li key={id}>
                <span>{icon}</span>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
        <div className="sidebar-footer">
          <div className="date">
            <p>&copy; {currentYear}. All Rights Reserved</p>
          </div>
          <div className="links"></div>
        </div>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

  ul {
    display: flex;
    flex-direction: column;
    gap: 2.5em;
    margin-top: 2em;
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

  a {
    text-decoration: none;
    color: #000;
    font-size: 1.5em;
    &:hover {
      color: #2c277f;
    }
  }

  span {
    padding-right: 0.7em;
    font-size: 1.9em;
  }
`;

export default Sidebar;
