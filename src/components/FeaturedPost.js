import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchDelete } from "../utility/api";
import { fetchMessage } from "../utility/api";



const FeaturedPost = ({featuredPost, token, postID, posts, setPosts, userName,setSearch}) => {
    // const {postId} = useParams();
    const history = useHistory()
    const [comment, setComment] = useState('')

    const deletePost = (selectedPost) => {
        fetchDelete(token, postID, selectedPost, posts,setPosts);
        history.push('/posts')
    }
    
    const closePostView = () => {
        history.push('/posts')
        console.log(featuredPost)
        console.log(postID)
        setSearch('')
    }

    const handleCommentSubmit = (event) =>{
        event.preventDefault();
        if (userName !== featuredPost.author.username){
            const message = fetchMessage(postID, token, comment)
            alert("MESSAGE SENT!")
            setComment('')
        } else{
            alert("Can't send message to yourself :(")
        }

    }


    return (
        <>
            <div id= "featured-view">
                <button id="view-btn" onClick={closePostView}>X</button>
                <h1 id="title-view">{featuredPost.title}</h1>
                <p>{featuredPost.description}</p> 
                <b className="view-detail">Price:</b> <span className="view-content">{featuredPost.price}</span> 
                <br></br>
                <b className="view-detail">Seller:</b> <span className="view-content">{featuredPost.author.username}</span> 
                <br></br>
                <b className="view-detail">Location:</b> <span className="view-content">{featuredPost.location}</span> 
                <br></br>
                <section id="comment-container">
                    <div>Messages:</div>
                    <ul id="comment-list">
                        {
                            featuredPost.messages.map(message => {
                                console.log(featuredPost)
                                console.log(message)
                                
                                if (featuredPost.author.username !== message.fromUser.username){
                                    return  <>
                                        <li key={featuredPost._id}>
                                            <span>{message.content} - Posted By: {message.fromUser.username} </span>
                                        </li>
                                    </>
                                }
                            // When I'm logged in and I select MY post -->
                              // on MY post, I'm only able to see received messages from other accounts
                                // I want to see MY messages on OTHER posts. 
                            })
                        }
                    

                    </ul>
                </section>
                <footer >
                    <form id="feature-footer" onSubmit={handleCommentSubmit}>
                        <input id="comment-input" name="comment" type="text" 
                            placeholder="Enter message" value={comment} onChange = {(event) => setComment(event.target.value)} />
                        <button id="comment-btn" type="submit">Send</button>
                    </form>
                </footer>

                <button id="delete-view" onClick={() => deletePost(postID)}>Delete Post</button>
                
            </div>
        </>
            
   
    )
}


export default FeaturedPost


