import React from "react";
import styled from "styled-components";

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
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: red; */
`;
export default Navbar;
