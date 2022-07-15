import React from "react";


const Profile = ({token,comment, setComment, userName}) =>{
   
    return (
        <>
            <div id="profile-container">
                {
                    !token ? 
                    <h1 id="profile-title">Please Log In</h1> :
                    <>
                        <h1 className="profile-title">WELCOME {userName}</h1>
                        <h2 className="profile-title">Sent Messages</h2>
                        <h2 className="profile-title">Recieved Messages</h2>
                    </>
                }
                
            </div>
            
        </>
    )

}


export default Profile