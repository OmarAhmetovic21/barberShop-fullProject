import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import React, { useState } from "react";
import Header from '../common/Header';
import hairstylistImg from '../../images/Stylists/HairStylist.jpg';
import beardstylistImg from '../../images/Stylists/Beard Stylist.jpg';
import facewashImg from '../../images/Stylists/Face washer.jpg';
import dyeExpertImg from '../../images/Stylists/Dye Expert.jpg';

export default function Team(){

  const[isOpen, setIsOpen] = useState(false);

  const toggleFun = ()=> {
    setIsOpen(!isOpen);

};

return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggleFun}/>
      <Navbar toggle={toggleFun}/>
      <Header title={'Our Team'}/>

      <div>
      <img src={hairstylistImg} style={{height: '100vh', width: '100vh', marginTop: '50px'}}></img>
      </div>
      <h3>Hair stylist: Robby Stevens </h3>

      <div>
      <img src={beardstylistImg} style={{height: '100vh', width: '100vh', marginTop: '50px'}}></img>
      </div>
      <h3>Beard stylist: Steve Nolan </h3>

      <div>
      <img src={facewashImg} style={{height: '100vh', width: '100vh', marginTop: '50px'}}></img>
      </div>
      <h3>Face washer: Scott Johnson </h3>

      <div>
      <img src={dyeExpertImg} style={{height: '75vh', width: '100vh', marginTop: '50px'}}></img>
      </div>
      <h3 style={{marginBottom: '50px'}}>Dye Expert: Edgar Mathis </h3>
      
    </div>
    
  );


}