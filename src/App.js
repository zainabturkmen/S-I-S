import React, { useState } from "react";
import styled from "styled-components";

import {
  Navbar,
  Sidebar,
  Hero,
  About,
  Services,
  Projects,
  Testimonails,
  Contact,
} from "./components";
import styled from "styled-components";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Wrapper>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonails />
      <Contact />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: auto 0;
`;

export default App;
