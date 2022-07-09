import React, {useEffect, useState} from "react";
import { fetchRegister } from "../utility/api";

const Register = () => {
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
    }

    useEffect(() => { // added useEffect function in submit()?
        fetchRegister();
    }),[];

    //I want the input value of username set as my user.username
    //I want the input value of password set as my user.password
    //Is my destructure correct on ./api? (destructuring ${userName} and ${password})



    return (
        <div >
             <h1 id= "register">Sign up</h1>
            <div id='form-container'>
                <form id="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="Username">Username</label>
                    <input type="text" name="username" value={userName} onChange={handleChangeUser} required />
                    <label htmlFor="Password">Password</label>
                    <input className="password" type="text" name="password" value={password} onChange={handleChangePassword}required />
                    <button className="clientButton" type="submit">SIGN UP</button>
                </form> 
            </div>  

        </div>
       
    )

}

export default Register