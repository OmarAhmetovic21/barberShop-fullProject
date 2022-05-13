import AppointmentForm from './AppointmentForm';
import Header from '../common/Header';

const addAppointment = async (appointment) => {

  
  // LOGIN

  /*const getLoginToken = await fetch('http://localhost:5000/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      email:"test@test.com",
      password:"123456"
    })
  });

  const loginToken = await getLoginToken.json();*/

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

  const data = await res.json()

  window.location = '/'
}

function Appointment() {
  return (
    <div>
      <Header/>
      <AppointmentForm onAdd={addAppointment}/>
    </div>
    
  );
}

export default Appointment;
