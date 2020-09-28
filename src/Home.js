import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import web from "../src/img/web4.png";
import Common from './Common';

const Home = () => {
  return(
    <>
      <Common 
      name='Grow your business with' 
      imgsrc={web} 
      visit="/services" 
      btname="Get Started" 
      />
    </>
  );
};

export default Home;