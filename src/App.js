import React, { useState } from "react";
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

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonails />
      <Contact />
    </>
  );
}

export default App;
