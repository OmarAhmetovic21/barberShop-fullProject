import { useState } from 'react'
import * as React from 'react';
import BasicDateTimePicker from '../common/BasicDateTimePicker';
import moment from 'moment'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AppointmentForm = ({ onAdd }) => {
  const [fName, setFName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  let [dateAndTime, setDateAndTime] = useState('')
  let [date, setDate] = useState('')
  let [time, setTime] = useState('')
  const [option, setOption] = React.useState('');

  const handleChange = (event) => {
    setOption(event.target.value);
  };


  const addDateAndTime  = async (dateAndTime) => {
    
    const givenDate = moment(dateAndTime.newValue).format('YYYY-MM-DD');
    const givenTime = moment(dateAndTime.newValue).format('HH:mm');
    setDate(givenDate);
    setTime(givenTime);
    setDateAndTime(dateAndTime.newValue);

  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (!fName || !mobile || !email || !dateAndTime) {
      alert('Please add a appointment')
      return
    }

    onAdd({ fName, mobile, email, date, time, option })

    setFName('')
    setMobile('')
    setEmail('')
    setDateAndTime('')
    setDate('')
    setTime('')
    setOption('')
  }

  return (
    <>
    <form className='add-form mr-30 ml-30' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Full Name</label>
        <input
          type='text'
          placeholder=''
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        />
      </div>
      
      <div className='form-control'>
      <label>Mobile</label>
        <input
          type='text'
          placeholder=''
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>

      <div className='form-control'>
      <label>Email</label>
        <input
          type='text'
          placeholder=''
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>


      <div className='form-control' style={{margin: 'auto',width: '50%'}}>

      <div>
      <label>Options</label>
      
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Select option</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label="Select option"
          onChange={handleChange}
        >
  
        <MenuItem value={'Haircut'}>Haircut</MenuItem>
        <MenuItem value={'Beard'}>Beard</MenuItem>
        <MenuItem value={'Face wash'}>Face wash</MenuItem>
        <MenuItem value={'Hair dye'}>Hair dye</MenuItem>
      </Select>
    </FormControl>

      </div>
      
      </div>

  

      <div className='form-control'>
      <label>Select Date and Time</label>
      <BasicDateTimePicker onAddDateAndTime={addDateAndTime}/>
      </div>

      <input type='submit' value='Confirm booking' style={{background:'#DAA520', color: 'black'}} className='btn btn-block' />
    </form>

    </>
  )
}

export default AppointmentForm
