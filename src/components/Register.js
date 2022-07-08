import React, {useState} from "react";

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
    return (
        <div >
             <h1 id= "register">Sign up</h1>
            <div id='form-container'>
                <form id="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="Username">Username:</label>
                    <input type="text" name="username" value={userName} onChange={handleChangeUser} required />
                    <label htmlFor="Password">Password:</label>
                    <input className="password" type="text" name="password" value={password} onChange={handleChangePassword}required />
                    <button className="clientButton" type="submit">SIGN UP</button>
                </form> 
            </div>  

        </div>
       
    )

}

export default Register