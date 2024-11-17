import React from "react";
import styled from "styled-components";
import CV from "../assets/Sadat_CV.pdf";
import { BiMenuAltLeft } from "react-icons/bi";

const Navbar = () => {
  return (
    <Wrapper>
      <nav>
        <h1>Sayed Irfan</h1>
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
        <a download="Sayed Irfan Sadat CV" href={CV} className="cv">
          Download CV
        </a>
        <button>
          <BiMenuAltLeft />
        </button>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  button {
    display: none;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3em;

    li {
      list-style: none;
      a {
        text-decoration: none;
        color: black;
        font-size: 1.3em;
        &:hover {
          color: #4f46e5;
        }
      }
    }
  }

  h1 {
    font-family: "Edu AU VIC WA NT Pre", cursive;
    font-weight: 600;
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

  .cv {
    text-align: center;
    text-decoration: none;
    color: black;
    border-radius: 20px;
    border: 2px solid #4f46e5;
    background: #fff;
    justify-self: center;
    width: 160px;
    padding: 0.8em 0;
    font-size: 1.1em;
    &:hover {
      color: white;
      background-color: #4f46e5;
    }
  }
`;
export default Navbar;
