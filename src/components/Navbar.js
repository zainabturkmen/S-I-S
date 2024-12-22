import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import CV from "../assets/Sadat_CV.pdf";
import { BiMenuAltLeft } from "react-icons/bi";
import { links } from "./data";

const Navbar = ({ toggleSidebar }) => {
  return (
    <Wrapper>
      <nav>
        <h1>Sayed Irfan</h1>
        <ul>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link
                  to={url}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="link">
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="btn-container">
          <a download="Sayed Irfan Sadat CV" href={CV} className="cv">
            Download CV
          </a>
          <button>
            <BiMenuAltLeft onClick={toggleSidebar} />
          </button>
        </div>
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
    padding: 5px 0;
  }

  button {
    display: none;
    cursor: pointer;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3em;
  }

  li {
    list-style: none;
  }

  .link {
    text-decoration: none;
    color: black;
    font-size: 1.3em;
    cursor: pointer;
    &:hover {
      border-bottom: 2px solid #4f46e5;
      color: #4f46e5;
    }
  }

  /* .active {
    border-bottom: 2px solid #4f46e5;
    color: #4f46e5;
  } */

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

  .cv {
    text-align: center;
    text-decoration: none;
    border-radius: 3em;
    border: 2px solid #4f46e5;
    justify-self: center;
    width: 160px;
    padding: 0.8em 1em;
    font-size: 1.1em;
    transition: all 0.3s linear;
    &:hover {
      background: linear-gradient(
        90deg,
        rgba(79, 70, 229, 0.8) 0%,
        #2c277f 100%
      );
      color: #fff;
    }
  }

  @media (max-width: 1300px) {
    h1 {
      font-size: 1.5em;
    }

    .link {
      font-size: 1em;
    }

    .cv {
      width: 150px;
      padding: 0.5em 0.9em;
      font-size: 1em;
    }
  }

  @media (max-width: 1000px) {
    nav {
      justify-content: space-between;
      margin: 0 2em;
    }
    ul {
      display: none;
    }

    h1 {
      font-size: 2em;
    }

    .btn-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button {
      display: block;
      background-color: transparent;
      border: none;
      font-size: 3.6em;
      margin-top: 0.1em;
      color: #4f46e5;
      &:hover {
        color: black;
      }
    }

    .cv {
      font-size: 1.3em;
      border-radius: 3em;
    }
  }

  @media (max-width: 600px) {
    nav {
      margin: 0 0.5em;
    }

    h1 {
      font-size: 1.2em;
    }

    button {
      font-size: 2.2em;
    }

    .cv {
      font-size: 0.8em;
      width: 90px;
      border: 1px solid #4f46e5;
      padding: 0.6em 1em;
    }
  }
`;
export default Navbar;
