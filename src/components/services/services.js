import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import React, { useState } from "react";
import Header from '../common/Header';
import haircutImg from '../../images/Haircut.jpg';

export default function Services(){

  const[isOpen, setIsOpen] = useState(false);

  const toggleFun = ()=> {
    setIsOpen(!isOpen);

};

return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggleFun}/>
      <Navbar toggle={toggleFun}/>
      <Header title={'Services'}/>
      <div>
      <img src={haircutImg} style={{height: '50vh', width: '100vh', marginTop: '50px'}}></img>
     </div>
     <h3>Haircut: 10KM</h3>
     <div>
      
     
    </div>
    </div>
    
  );


}