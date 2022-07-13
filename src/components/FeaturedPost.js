import React from "react";
import { useParams } from "react-router-dom";



const FeaturedPost = ({postID, featuredPost, setFeaturedPost}) => {
    const {postId} = useParams();
    return (
        <>
            <h1>Hello</h1>
            <p>{featuredPost.title}</p>  
        </>
            
   
    )
}


export default FeaturedPost


//NOT RENDERING