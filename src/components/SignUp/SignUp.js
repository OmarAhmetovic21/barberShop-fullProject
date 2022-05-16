import React, { useState } from "react";
import Header from "../common/Header"
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

function SignUp() {
    // React States
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const[isOpen, setIsOpen] = useState(false);

  const toggleFun = ()=> {
    setIsOpen(!isOpen);

};

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    
    signUp(name, email, password, phoneNumber);
  };


  const signUp = async (name, email, password, phoneNumber) => {

    const registerData = await fetch('http://localhost:5000/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password:password,
        phonenumber: phoneNumber
      })
    });

    if(registerData.status !== 200) {
      alert('This User Exists, please change parameters')
      return
    }

    window.location = '/'
  }

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label>Name </label>
          <input type="text" value={name} required onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='form-control'>
          <label>Email </label>
          <input type="text" value={email} required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='form-control'>
          <label>Password </label>
          <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='form-control'>
          <label>Phone Number </label>
          <input type="text" value={phoneNumber} required onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div>
          <input type='submit' value='Sign up' style={{background:'#DAA520', color: 'black'}} className='btn btn-block'/>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div>
        <Sidebar isOpen={isOpen} toggle={toggleFun}/>
        <Navbar toggle={toggleFun}/>
          <Header title={'Sign up'}/>
        </div>
        {renderForm}
      </div>
    </div>
  );

}

export default SignUp;