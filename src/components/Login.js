import React, {useState} from "react";
const Login = () =>{
    const[userName, setUserName] = useState('');
    const[password, setPassword] = useState('')

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
    }


    return <>
    <div>Login</div>
        <div id='container'>
            <form id="form" onSubmit={handleSubmit}>
                <label htmlFor="Username">Username:</label>
                <input type="text" name="username" value={userName} onChange={handleChangeUser} />
                <label htmlFor="Password">Password:</label>
                <input type="text" name="password" value={password} onChange={handleChangePassword}/>
                <button type="submit">LOG IN</button>

            </form> 
        </div>  
    </>
}

export default Login