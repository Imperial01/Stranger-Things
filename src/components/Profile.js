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

    const handleClick = (event,title) => {
        console.log(dataMessage())
        console.log(title)
        setSearch(event, title)
        history.push(`/posts`)
    }

    
    useEffect(() => {
        dataMessage();
    }, [])

  return <> 
    
       <>
          <h1 className="profile-title">WELCOME {userName}</h1>
          <h2 className="profile-title">Received Messages</h2>
          {
            sentMessages.map(message =>{
                console.log(message)
                return <>
                    {
                    userName !== message.fromUser.username ?
                    <article id="message-card">
                       <div id="sender">From: {message.fromUser.username}</div>
                       <br></br>
                       <div id="content-message">{message.content} </div>
                       <br></br>
                       <a onClick={() => handleClick(message.post.title)}>View Post</a>
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