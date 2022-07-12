import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllPost } from "../utility/api";

const cohortName = "2204-FTB-MT-WEB-PT";
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/`;

//i need a form that will let me create a post (i MUST be AUTHORIZED/Registered)
// have a button on my created post that will let me delete a post IF i am registered

// on a different user post, I need a message BUTTON

const Posts = (props) => {
  const {posts, setPosts} = props
  const [search, setSearch] = useState('');
  const {
    title,
    description,
    price,
    location
  } = props

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

  return (
    <div>
          <form id="postNav" onSubmit={handleSubmit}>
            <input type="text" name="search" placeholder="Search Post" value={search} onChange={handleSearch}></input>
            <Link to="/createform" style={{fontSize: "25px"}}>Create a Post</Link>
        </form>
        
      {
      posts.filter(post => {
        return `${post.title} ${post.description}`
        //After creating a post, I can't see my Posts because of a TypeError "Cannot read properties of undefined (reading "title") Post.js line 49:1
            .toLowerCase()
            .includes(search.toLowerCase())
      }).map((post) => {
        return (
          <div id="post-card">
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
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
