import React from "react";
import styled from "styled-components";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
} from "../components/data";

const Projects = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="iimg-container">
          <img src={image1} alt="image1" />
          <img src={image2} alt="image2" />
          <img src={image3} alt="image3" />
          <img src={image4} alt="image4" />
          <img src={image5} alt="image5" />
          <img src={image6} alt="image6" />
          <img src={image7} alt="image7" />
          <img src={image8} alt="image8" />
          <img src={image9} alt="image9" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export default Projects;
