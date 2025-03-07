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
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
} from "../components/data";

const images = [
  image1,
  image3,
  image2,
  image4,
  image5,
  image7,
  image8,
  image6,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
];

const Projects = () => {
  return (
    <Wrapper id="projects">
      <div className="container">
        <h1>My Projects</h1>

        <div className="img-container">
          {images.map((image, index) => {
            return <img src={image} alt="mage" key={index} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  img {
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
    width: 300px;
    height: 220px;
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 8px;
  }
  .img-container {
    display: flex;
    flex-wrap: wrap;
    max-width: 400px;
    margin: 0 auto;
    gap: 2em;
    padding: 1em;
    justify-content: center;
    align-items: center;
  }

  h1 {
    text-align: center;
    margin-top: 3em;
    font-family: Inter;
    font-size: 30px;
    font-weight: 600;
    line-height: 78px; /* 260% */
    margin-bottom: 0;
  }
  @media (min-width: 1000px) {
    .img-container {
      display: flex;
      flex-wrap: wrap;
      max-width: 10000px;
      margin: 0 auto;
      gap: 2em;
      padding-left: 1em;
      padding-top: 2em;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 380px;
      height: 280px;
      flex-shrink: 0;
    }

    h1 {
      font-size: 40px;
      font-weight: 600;
    }
  }

  @media (min-width: 1500px) {
    .img-container {
      display: flex;
      flex-wrap: wrap;
      max-width: 1450px;
      margin: 0 auto;
      gap: 2em;
      padding-left: 1em;
      padding-top: 2em;
    }

    img {
      width: 400px;
      height: 300px;
      flex-shrink: 0;
    }
    h1 {
      font-size: 40px;
      font-weight: 600;
    }
  }
`;

export default Projects;
