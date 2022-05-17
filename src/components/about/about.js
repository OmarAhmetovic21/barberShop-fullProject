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
       <p style={{marginTop: '125px', lineHeight: '2em'}} > 
       "Cuts" is a barber shop specialised in providing top quality services to customers <br></br>
       The main focus of our barber shop is quality of service, because that is what matters <br></br>
       the most to our customers. The working times of our salon are given below: <br></br> <br></br>
       MONDAY: 09:00-21:00 <br></br>
       TUESDAY: 09:00-21:00 <br></br>
       WEDNESDAY: 09:00-21:00 <br></br>
       THURSDAY: 09:00-21:00 <br></br>
       FRIDAY: 09:00-21:00 <br></br>
       SATURDAY: 09:00-21:00 <br></br>
       SUNDAY: Non-working day <br></br>
       </p>

       <h1 style={{marginTop: '125px'}}>Quality matters over everything</h1>
       <img src={aboutImg} style={{height: '100vh', width: '100vh', marginTop: '15px', marginBottom: '50px'}}></img>


      </div>
    );
  
  }