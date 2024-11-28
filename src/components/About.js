import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="top">
          <p className="about">About me</p>

          <h1>About Me</h1>
          <h3>
            Experienced graphic designer with +5 years of experience proficient
            in Adobe Creative Suite, brand identity development, typography,
            print and digital design, illustration, UI/UX design, photo editing,
            Motion design, visual communication, attention to detail,
            collaboration, and problem-solving. Let's create impactful visuals
            together
          </h3>
        </div>
        <div>
          <div>
            <h4>Graphic Designe</h4>
            <div>
              <div className="percentage-container">
                <div className="percentage"></div>
              </div>
              <p className="number">95%</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    margin: 0 auto;
    gap: 2em;
    padding: 1em;
  }

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .about {
    text-align: center;
    font-size: 10px;
    border: 1px solid #4f46e5;
    border-radius: 50%;
    width: 62px;
    padding: 0.3em 0;
  }
  h1 {
    font-family: Inter;
    font-size: 30px;
    font-weight: 600;
    line-height: 78px; /* 260% */
    margin-top: -0.5em;
  }

  h3 {
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 201%; /* 32.16px */
    margin-top: -1.5em;
  }

  .percentage-container {
    width: 355px;
    border-radius: 6px;
    background: #edecec;
  }

  .percentage {
    width: 340px;
    height: 6px;
    border-radius: 6px;
    background: linear-gradient(90deg, rgba(79, 70, 229, 0.8) 0%, #2c277f 100%);
  }
`;

export default About;
