import React, { useState } from "react";
import { fetchRegister } from "../utility/api";
//{user, setUser, token, setToken};

const Register = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  //const [user, setUser] = useState([]);
  const [token, setToken] = useState('');

  const handleChangeUser = (event) => {
    setUserName(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const registeredToken = await fetchRegister(userName, password); //returning a token
    setToken(registeredToken); // storing the token in setToken as a string
    console.log(userName, password);
    setUserName('');
    setPassword('');
    console.log(token)
  };

  // when I log in, the token will match the token from <Login />.

  return (
    <>
      {token ? 
        <>
        <h1 id= "activeAccount"> Thank you for Signing up</h1>
        <p id= "activeAccount" style={{fontSize: "20px"}}>Please Log In</p>
        </>
       : 
        <>
          <h1 id="register">Sign up</h1>
          <div id="form-container">
            <form id="register-form" onSubmit={handleSubmit}>
              <label htmlFor="Username">Username</label>
              <input
                type="text"
                name="username"
                value={userName}
                onChange={handleChangeUser}
                required
              />
              <label htmlFor="Password">Password</label>
              <input
                className="password"
                type="password"
                name="password"
                value={password}
                onChange={handleChangePassword}
                required
              />
              <button className="clientButton" type="submit">
                SIGN UP
              </button>
            </form>
          </div>
        </>
      }
    </>
  );
};

export default Register;
