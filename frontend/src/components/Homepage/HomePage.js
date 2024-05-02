import React from 'react'
import Hero from './Hero';
import WhyUs from './WhyUs';
import About from './About';
import Mentors from './Mentors';

function HomePage({aboutRef}) {
  return (
    <>
      <Hero />
      <Mentors />
      <About aboutRef={aboutRef}  />
      <WhyUs />
    </>
  )
}

export default HomePage
