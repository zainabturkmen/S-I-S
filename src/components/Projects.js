import React from "react";
import styled from "styled-components";

const Projects = () => {
  return <Wrapper>
    <div className="container">
      <div className="iimg-container"></div>
    </div>
  </Wrapper>;
};

const Wrapper = styled.div`

.container{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
`;

export default Projects;
