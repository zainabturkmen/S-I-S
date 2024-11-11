import React from "react";
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
  return (
    <>
      <Navbar />
      <Sidebar />
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
