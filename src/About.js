import React from 'react';
import Common from './Common';

import web from "../src/img/webdev.png";

const About = () => {
  return(
    <>
      <Common 
      name="technology"  
      imgsrc={web} 
      visit="/contact" 
      btname="Contact Now" 
      />
    </>
  );
};

export default About;