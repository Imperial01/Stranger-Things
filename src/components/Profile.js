import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { fetchUserData } from "../utility/api";



const Profile = ({ token, userName, posts,setSearch }) => {
    const [sentMessages, setSentMessages] = useState([])
    const [received, setReceived] = useState([])
    const history = useHistory();

    const dataMessage = async () => {
        setSentMessages(await fetchUserData(token))
        console.log(sentMessages)
        return sentMessages
    }

    const handleClick = (title) => {
        console.log(dataMessage())
        console.log(title)
        setSearch(title)
        history.push(`/posts`)
    }

    
    useEffect(() => {
        dataMessage();
    }, [])

  return <> 
    
       <>
          <h1 className="profile-title">WELCOME {userName}</h1>
          <h2 className="profile-title">PRIMARY INBOX</h2>
          {
            sentMessages.map(message =>{
                console.log(message)
                return <>
                    {
                    userName !== message.fromUser.username ?
                    <article id="message-card">
                        <h1 onClick={() => handleClick(message.post.title)}>Post: {message.post.title}</h1>
                        <div id="sender" className="inbox-card">From: {message.fromUser.username}</div>

                        <div id="content-message" className="inbox-card">{message.content} </div>
                        <br></br>
                        <a id= "view-post" onClick={() => handleClick(message.post.title)} style={{fontSize: "20px"}}>-View Post-</a>
                    </article>
                     // fix click handler, not sending to correct post.
                    : null
                    }
                  
                </>
                
            })
          }
        </>
    
    </>
}


export default Profile;
{/* {dataMessage.data.messages.map((message) => {
            <li>
              {message.content} from Account: {message.fromUser.userName}
            </li>;
          })}
          <h2 className="profile-title">Received Messages</h2>
        </>
      } */}