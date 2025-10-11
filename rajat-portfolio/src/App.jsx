import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Experience from './components/Experience';
import WhatIDo from './components/WhatIDo';
import Contact from './components/Contact';
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tools />
      <Projects />
      <Experience />
      <WhatIDo />
      <Contact />
    </>
  );
}