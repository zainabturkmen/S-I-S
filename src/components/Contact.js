import React from "react";
import styled from "styled-components";
import { MdOutlineCall } from "react-icons/md";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <div>
        <div className="title">
          <h1>Let’s Discuss Your Project</h1>
          <p>
            Let’s make something new, different and more meaningful or make
            thing more visual or conceptual
          </p>
        </div>
        <div className="main-container">
          <div className="top">
            <div className="content-container">
              <div className="icon">
                <MdOutlineCall />
              </div>
              <div className="info">
                <p>call me</p>
                <h4>+93 73 112 8886</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content-container {
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
  }

  .icon {
    width: 57px;
    height: 57px;
  }
`;

export default Contact;
