import {React, useEffect, useState } from "react";

const cohortName = '2204-FTB-MT-WEB-PT'
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/`


const Posts = () => {
    const [posts, setPosts] = useState([])
    console.log(posts)
    
    const fetchPost = async () => {
        const response = await fetch(`${APIURL}/posts`)
        const data = await response.json();
        setPosts(data);
        

        console.log(setPosts(data))
    }

    useEffect(() => {
        fetchPost();
    }, [])


    return <>
        <h1>Posts</h1>
        {
        posts.map(post => {
            console.log(post)
            return <div> {post}</div>
        })
    }
        
        
    </>
    
}


export default Posts