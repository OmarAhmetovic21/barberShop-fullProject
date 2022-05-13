import React, { useState } from "react";
import ReactDOM from "react-dom";
import Sidebar from "../sidebar"
import Navbar from "../navbar"
import HeroSection from '../heroSection'

function Home() {

    const[isOpen, setIsOpen] = useState(false);

    const toggle = ()=> {
        setIsOpen(!isOpen);

    };

  return (
    <div>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection/>  
    </div>
  );

}

export default Home;
