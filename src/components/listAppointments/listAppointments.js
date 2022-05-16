import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import React, { useEffect, useState } from "react";
import Header from '../common/Header';
import moment from 'moment'

export default function ListAppointments(){
  const [data, setData] = useState([])

  const[isOpen, setIsOpen] = useState(false);

  const toggleFun = ()=> {
    setIsOpen(!isOpen);

};

/*const appointmentData = useEffect(()=> {
    appointments();
})*/

const appointments = async () => {

    const res = await fetch('http://localhost:5000/api/v1/appointments', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }

    });


    const appointmentData = await res.json();
    setData(appointmentData.data);
  }

  
useEffect(() => {
    appointments()
  }, [])

return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggleFun}/>
      <Navbar toggle={toggleFun}/>
      <Header title={'Appointments'}/>

      <ul style={{marginTop: '50px', lineHeight:'3em'}}>
      {
          data.length > 0 && (
      data.map((object, i) => 
      <li li key={object.id}>
    { 
      moment(object.date).format('DD-MM-YYYY')
      } 
        {", "}
      { 
      object.startTime
      }
        {", "}
        
      { 
      object.options[0].option
      }
      
      
      </li>
      )
          ) }
      </ul>



    </div>
    
  );


}