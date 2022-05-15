import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import React, { useState } from "react";
import Header from '../common/Header';
import aboutImg from '../../images/HairStyling.jpg'

export default function About(){

    const[isOpen, setIsOpen] = useState(false);
  
    const toggleFun = ()=> {
      setIsOpen(!isOpen);
  
  };
  
  return (
      <div>
        <Sidebar isOpen={isOpen} toggle={toggleFun}/>
        <Navbar toggle={toggleFun}/>
        <Header title={'About'}/>
        
       <h1 style={{marginTop: '125px'}}>Simplicity leads to perfection</h1>
       <img src={aboutImg} style={{height: '100vh', width: '100vh', marginTop: '15px', marginBottom: '50px'}}></img>


      </div>
    );
  
  }