import React, { useRef } from "react";
import styled from "styled-components";
import { MdOutlineCall } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8oge1eg", "template_v51r6d8", form.current, {
        publicKey: "KcKqL1RafLSvF2VkT",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Wrapper id="contact">
      <div>
        <div className="title">
          <h1>
            Let’s Discuss Your <span>Project</span>
          </h1>{" "}
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
                <h3>call me</h3>
                <h4>+93 73 112 8886</h4>
              </div>
            </div>
            <div className="content-container">
              <div className="icon">
                <MdOutlineMail />
              </div>
              <div className="info">
                <h3>Email me</h3>
                <h4>sayedirfansadat2022@gmail.com</h4>
              </div>
            </div>
            <div className="content-container">
              <div className="icon">
                <IoLocationOutline />
              </div>
              <div className="info">
                <h3>Address</h3>
                <h4>Kabul, Afghanistan</h4>
              </div>
            </div>
          </div>
          <div className="bottom">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="from_name" placeholder="Full Name" />
              <input type="email" name="from_email" placeholder="Email" />
              <textarea name="message" placeholder="Message" />
              <button type="submit" value="Send">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
      ;
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2em 0;
  h1 {
    color: #0b0c0c;
    text-align: center;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 54px; /* 135% */
    margin-bottom: 0;
    span {
      background: linear-gradient(
        90deg,
        rgba(79, 70, 229, 0.8) 0%,
        #2c277f 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  p {
    color: #323433;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    width: 300px;
    height: 56px;
    margin: 0 auto;
  }
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
    gap: 2em;
    margin: 1em;
  }

  .top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    gap: 1.4em;
  }

  .content-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5em;
    width: 290px;
    height: 90px;
    border-radius: 8px;
    background: var(--Light-Base-Color-White, #fff);
    filter: drop-shadow(0px 3px 1px rgba(0, 0, 0, 0.2));
    padding: 0.5em 1.3em;
  }

  .icon {
    background-color: red;
    align-items: center;
    padding: 0.4em 0.6em 0.1em 0.6em;
    font-size: 1.7em;
    border-radius: 0.6em;
    background: linear-gradient(90deg, rgba(79, 70, 229, 0.8) 0%, #2c277f 100%);
    color: #fff;
  }

  h3 {
    color: #92929d;
    font-size: 16px;
    font-weight: 400;
    line-height: 14px; /* 87.5% */
    letter-spacing: 0.128px;
  }
  h4 {
    color: #11142d;
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px; /* 112.5% */
    letter-spacing: 0.08px;
    margin-top: -0.1em;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    margin-top: 1em;
  }

  input {
    width: 300px;
    height: 50px;
    border: 1px solid rgba(238, 238, 238, 0.93);
    border-radius: 8px;
    padding: 0 1em;
  }
  textarea {
    height: 146px;
    border-radius: 8px;
    border: 1px solid rgba(238, 238, 238, 0.93);
    background: var(--Light-Base-Color-White, #fff);
    padding: 1em;
  }

  button {
    height: 50px;
    border-radius: 8px;
    border: 1px solid #4f46e5;
    cursor: pointer;
    background-color: transparent;
    font-size: 1.2em;
    &:hover {
      background: linear-gradient(
        90deg,
        rgba(79, 70, 229, 0.8) 0%,
        #2c277f 100%
      );
      color: #fff;
    }
  }

  @media (min-width: 1150px) {
    p {
      width: 651.153px;
      margin-top: 0.2em;
    }
    form {
      margin-top: 2em;
    }
    input,
    textarea,
    button {
      width: 700px;
    }
    button {
      width: 725px;
    }

    .main-container {
      display: flex;
      flex-direction: row;
    }

    .content-container {
      /* width: 390px; */
      height: 96px;
    }

    .icon {
      padding: 0.7em 0.8em 0.3em 0.8em;
    }
  }
`;

export default Contact;
