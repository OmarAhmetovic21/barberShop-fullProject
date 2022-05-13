import './App.css';
import Appointment from './components/createAppointment/Appointment'
import Login from './components/login/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <div className=''>
        <Routes>
          <Route path='/' element={<Home/> }/>
          <Route path='/login' element={<Login/> }/>
          <Route path='/appointment' element={<Appointment />} />
        </Routes>
      </div>
    </Router>
    </div>
    
  );
}

export default App;
