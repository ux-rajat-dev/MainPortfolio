import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tools from './components/Tools';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import WhatIDo from './components/WhatIDo';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tools />
      <Portfolio />
      <Experience />
      <WhatIDo />
      <Contact />
    </>
  );
}
