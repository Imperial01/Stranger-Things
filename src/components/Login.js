import React, {useState} from "react";
const Login = () =>{
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


    const handleChangeUser = (event) => {
        setUserName(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setUserName('')
        setPassword('')
        console.log(userName, password)
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