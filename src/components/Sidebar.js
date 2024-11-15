import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const isOpen = false;
  return (
    <Wrapper>
      <aside className={`${isOpen ? "sidebar  show-sidebar" : "sidebar"}`}>
        <h1>Sayed Irfan</h1>
        <button>
          <FaTimes />
        </button>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Testimonails</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: gray;
    transition: all 0.3s linear;
    transform: translate(-100);
    box-shadow: 0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25),
      0.125em 0.125em 0.25em rgba(0, 0, 0, 0.15);
    /* z-index: -1; */
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
`;

export default Sidebar;
