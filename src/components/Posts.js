import { React, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { fetchAllPost } from "../utility/api";

const Posts = (props) => {
  const [search, setSearch] = useState('');
  const {
    posts, setPosts, 
    postID, setPostID, token, 
    featuredPost, setFeaturedPost} = props
    
  const history = useHistory();
  const post = async () => {
    setPosts(await fetchAllPost())
  }

  useEffect(() => {
    post();
  }, []);


  const handleSearch= (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleClick = () => {
    token ? history.push('/createform') :
    alert("Please Login")
  }

  // const handleDelete = async () => {
  //   const deletePost = await fetchDelete(postID,token);
  //   console.log(postID)
  //   let id = posts.map(post => {
  //     return post._id
  //   })
  //   console.log(id)
  //   return deletePost
  // }
  //   //error:
  //   //message: "that route does not exist"
  //   //name: "UndefinedRoute"



  const handleFeaturedPost = (event, post) => {
    // grab that post and display on screen
    console.log("test")
    if(token){
      setFeaturedPost(post);
      history.push(`/posts/${post._id}`)
    }else{
      alert("please Login")
    }
      
    // change the URL path to ${APIURL}/post/postID
  }

  return (
    <div>
          <form id="postNav" onSubmit={handleSubmit}>
            <input type="text" name="search" placeholder="Search Post" value={search} onChange={handleSearch}></input>
            <button style={{fontSize: "15px"}} onClick = {handleClick}>Create a Post +</button>
        </form>
        
      {
      posts.filter(post => {
        
        return `${post.title} ${post.description}`
        //After creating a post, I can't see my Posts because of a TypeError "Cannot read properties of undefined (reading "title") Post.js line 49:1
            .toLowerCase()
            .includes(search.toLowerCase())
      }).map((post) => {
        return (
        <>
          <div id="post-card" onClick={(event) => {
            {handleFeaturedPost(event, post)}
          }}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <div>
              <b>Price:</b> {post.price}
            </div>
            <div>
              <b>Seller:</b> {post.author.username}
            </div>
            <div>
              <b>Location:</b> {post.location}
            </div>
            <br></br>
            {/* <button onClick={handleDelete}>Delete</button> */}
          </div>
        </>  
        );
      })}
    </div>
  );
};

export default Posts;
