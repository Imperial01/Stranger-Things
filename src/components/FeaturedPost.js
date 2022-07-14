import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { fetchDelete } from "../utility/api";



const FeaturedPost = ({featuredPost,setPostID, token, postID, posts, setPosts}) => {
    const {postId} = useParams();
    const history = useHistory()

    const deletePost = () => {
        fetchDelete(token, postID);
        const newPost = posts.filter(post => post.id !== postID)
        setPosts(newPost)
        history.push('/posts')
    }

    const closePostView = () => {
        history.push('/posts')
        console.log(postID)
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
                <button id="delete-view" onClick={deletePost}>Delete Post</button>
            </div>
        </>
            
   
    )
}


export default FeaturedPost


