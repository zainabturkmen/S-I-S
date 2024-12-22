import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <div className="container" id="about">
        <div className="top">
          <p className="about">About me</p>

          <h1>About Me</h1>
          <h3>
            Experienced graphic designer with +6 years of experience proficient
            in Adobe Creative Suite, brand identity development, typography,
            print and digital design, illustration, UI/UX design, photo editing,
            Motion design, visual communication, attention to detail,
            collaboration, and problem-solving. Let's create impactful visuals
            together
          </h3>
        </div>
        <div className="bottom">
          <div>
            <div className="title">
              <h4>Graphic Designe</h4>
              <p className="number">95%</p>
            </div>
            <div>
              <div className="percentage-container">
                <div className="percentage"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="title">
              <h4>Videography</h4>
              <p className="number2">85%</p>
            </div>
            <div>
              <div className="percentage-container">
                <div className="percentage2"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="title">
              <h4>3D Designe</h4>
              <p className="number3">90%</p>
            </div>
            <div>
              <div className="percentage-container">
                <div className="percentage3"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="title">
              <h4>Social Media Marketing</h4>
              <p className="number4">80%</p>
            </div>
            <div>
              <div className="percentage-container">
                <div className="percentage4"></div>
              </div>
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
    width: 320px;
    margin: 0 auto;
    gap: 2em;
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
    line-height: 78px;
    margin-top: -0.6em;
    font-weight: 600;
  }

  h3 {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 201%;
    margin-top: -2em;
    width: 300px;
  }

  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .percentage-container {
    width: 300px;
    border-radius: 6px;
    background: #edecec;
    margin-top: -0.7em;
  }

  .title {
    display: flex;
    justify-content: space-between;
    width: 300px;
  }

  .percentage,
  .percentage2,
  .percentage3,
  .percentage4 {
    height: 6px;
    border-radius: 6px;
    background: linear-gradient(90deg, rgba(79, 70, 229, 0.8) 0%, #2c277f 100%);
  }

  .percentage {
    width: 292px;
  }
  .percentage2 {
    width: 280px;
  }
  .percentage3 {
    width: 290px;
  }
  .percentage4 {
    width: 270px;
  }

  .number {
    margin-right: 0em;
  }
  .number2 {
    margin-right: 0.5em;
  }
  .number4 {
    margin-right: 1em;
  }

  @media (min-width: 1000px) {
    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 1000px;
    }

    .top {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
    }

    h3 {
      text-align: start;
      width: 500px;
      line-height: 2em;
    }
  }
  @media (min-width: 1500px) {
    .container {
      justify-content: center;
      align-items: center;
      gap: 10em;
      /* max-width: 1000px; */
      margin: 0 auto;
    }

    h1 {
      font-size: 40px;
      margin-top: -0.3em;
    }

    h3 {
      width: 600px;
      line-height: 2.2em;
      font-size: 18px;
    }

    .percentage-container {
      width: 500px;
    }

    .percentage {
      width: 490px;
    }
    .percentage2 {
      width: 470px;
    }
    .percentage3 {
      width: 480px;
    }
    .percentage4 {
      width: 460px;
    }

    .number {
      margin-right: -0.2em;
    }
    .number2 {
      margin-right: 1em;
    }
    .number4 {
      margin-right: 1.5em;
    }
  }
`;

export default About;
