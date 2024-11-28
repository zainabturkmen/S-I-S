import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <div>
        <p>About me</p>

        <h1>About Me</h1>
        <h3>
          Experienced graphic designer with +5 years of experience proficient in
          Adobe Creative Suite, brand identity development, typography, print
          and digital design, illustration, UI/UX design, photo editing, Motion
          design, visual communication, attention to detail, collaboration, and
          problem-solving. Let's create impactful visuals together
        </h3>
      </div>
      <div>
        <label>Graphic Design</label>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: red;
`;

export default About;
