import React from 'react';
import './App.css';
import Appointment from './components/createAppointment/Appointment'
import Login from './components/login/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home';
import SignUp from './components/SignUp/SignUp';
import Services from './components/services/services';
import About from './components/about/about';
import Team from './components/team/team';
import ListAppointments from './components/listAppointments/listAppointments';

function App() {
  return (
    <div className="App">
    <Router>
    <div className=''>
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/login' element={<Login/> }/>
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/listappointments' element={<ListAppointments/>} />
      </Routes>
    </div>
  </Router>
  </div>
  
  );
}

export default App;





//npm install
//npm add styled-components or npm install styled-components
//npm install react-router-dom
//npm install react-icons --save
//npm install react-scroll
//https://www.pexels.com/search/barber/