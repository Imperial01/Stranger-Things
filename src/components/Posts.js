import { React, useEffect, useState } from "react";
import { fetchAllPost } from "../utility/api";

const cohortName = "2204-FTB-MT-WEB-PT";
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/`;

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

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
        <form onSubmit={handleSubmit}>
            <input type="text" name="search" placeholder="Search Post" value={search} onChange={handleSearch}></input>
        </form>
      {
      posts.filter(post => {
        return `${post.title} ${post.description}`
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
