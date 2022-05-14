import React, { useState } from "react";
import Header from "../common/Header"

function Login() {
    // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    let { uname, pass } = document.forms[0];

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
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className='form-control'>
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div>
          <input type='submit' value='Sign in' style={{background:'#DAA520', color: 'black'}} className='btn btn-block'/>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div>
          <Header title={'Sign in'}/>
        </div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );

}

export default Login;
