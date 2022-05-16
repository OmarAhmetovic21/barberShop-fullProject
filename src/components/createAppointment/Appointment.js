import AppointmentForm from './AppointmentForm';
import Header from '../common/Header';
import Navbar from "../Navbar"
import Sidebar from '../Sidebar';
import React, { useState } from "react";

export default function Appointment() {

  const[isOpen, setIsOpen] = useState(false);

  const toggleFun = ()=> {
    setIsOpen(!isOpen);

};

const addAppointment = async (appointment) => {
  // GET TOKEN FROM LOCALSTORAGE

  const loginToken = localStorage.getItem("loginToken")

  // GET STAFF

  const getStaff = await fetch('http://localhost:5000/api/v1/auth/me', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization':'Bearer ' + loginToken
    }
  });

  const dataStaff = await getStaff.json();

  if(getStaff.status !== 200) {
    alert('Api error')
    return
  }

  const data12 = {
    user: appointment.fName,
    staff: dataStaff.data._id,
    date: appointment.date,
    startTime: appointment.time,
    options:{
      option: appointment.option,
  }
  }

  // POST APPOINTMENT

  console.log("DATA SENT TO API: ", data12);
  
  const res = await fetch('http://localhost:5000/api/v1/appointments', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + loginToken
    },
    body: JSON.stringify(data12),
  })

  if(res.status !== 201) {
    alert('Api error')
    return
  }

  await res.json()

  window.location = '/'
}

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggleFun}/>
      <Navbar toggle={toggleFun}/>
      <Header/>
      <AppointmentForm onAdd={addAppointment}/>
    </div>
    
  );
}


