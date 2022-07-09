import React, {useState} from "react";
import { fetchLogin } from "../utility/api";
const Login = () =>{
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loginUser, setloginUser] = useState('')


    const handleChangeUser = (event) => {
        setUserName(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const loggedUser = await fetchLogin(userName,password) // fetching login token
        setloginUser(loggedUser)
        console.log(loginUser)
        console.log(loggedUser)
        console.log(userName, password)
        setUserName('')
        setPassword('')
    }


    return <>
    <h1 id="login">Login</h1>
        <div id='form-container'>
            <form id="login-form" onSubmit={handleSubmit}>
                <label htmlFor="Username">Username</label>
                <input type="text" name="username" value={userName} onChange={handleChangeUser} required />
                <label htmlFor="Password">Password</label>
                <input className="password" type="text" name="password" value={password} onChange={handleChangePassword}required />
                <button className="clientButton" type="submit">LOG IN</button>

            </form> 
        </div>  
    </>
}

export default Login