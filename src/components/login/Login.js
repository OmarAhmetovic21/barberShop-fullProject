import React, { useState } from "react";
import Header from "../common/Header"
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

function Login() {
    // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uname, setUname] = useState('')
  const [pass, setPass] = useState('')

  const[isOpen, setIsOpen] = useState(false);

  const toggleFun = ()=> {
    setIsOpen(!isOpen);

};

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    
    login(uname,pass);
  };


  const login = async (name, pass) => {
    
      const getLoginToken = await fetch('http://localhost:5000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          email: name,
          password:pass
        })
      });
  
      const loginToken = await getLoginToken.json();

      if(getLoginToken.status !== 200) {
        alert('ERROR. Plase check username or password')
        return
      }
  
      localStorage.setItem("loginToken", loginToken.token)
  
      window.location = '/'
    
    
  }

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label>Email </label>
          <input type="text" value={uname} required onChange={(e) => setUname(e.target.value)} />
          {renderErrorMessage("uname")}
        </div>
        <div className='form-control'>
          <label>Password </label>
          <input type="password" value={pass} required onChange={(e) => setPass(e.target.value)} />
          {renderErrorMessage("pass")}
        </div>
        <div>
          <input type='submit' value='Login' style={{background:'#DAA520', color: 'black'}} className='btn btn-block'/>
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
          <Header title={'Login'}/>
        </div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );

}

export default Login;
