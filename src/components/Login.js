import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fetchLogin } from "../utility/api";
const Login = ({ token, setToken }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedin,setIsLoggedin] = useState(false)
  //const [loginUser, setloginUser] = useState('')

  const handleChangeUser = (event) => {
    setUserName(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loggedToken = await fetchLogin(userName, password); // fetching login token
    setToken(loggedToken);
    setUserName(userName);
    setIsLoggedin(true)
    console.log(token);

  };
  // once i log in, I want my username to show and a create a button that sends me to my profile.

  return (
    <>
      {isLoggedin ? (
        <>
          <h1 id="activeAccount">Welcome {userName} !</h1>
        </>
      ) : (
        <>
          <h1 id="login">Login</h1>
          <div id="form-container">
            <form id="login-form" onSubmit={handleSubmit}>
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
                LOG IN
              </button>
              <div id="login-break">
                <h6>or</h6>
              </div>
              <Link id= "link-btn" to="/">
                <button id="signup-Button" type="submit">Sign up</button>
              </Link>
              
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
