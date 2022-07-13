import React, { useState } from "react";
import { fetchCreateForm } from "../utility/api";

const Form = ({token, posts, setPosts, postID, setPostID}) => {
    const [title, setTitle] = useState('')
    const [description, setdescription] = useState('')
    const [price, setprice] = useState('')
    const [location, setlocation] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(title,description,price,location)
        if(token){
            const createForm = await fetchCreateForm(token,title,description,price,location)
            setPosts([createForm, ...posts])
            console.log(createForm.author._id)
            setPostID(createForm.author._id)
            console.log(postID) // this is working.
        } else {
            alert("Please Login")
        }
    }
    return (
        <div id="create-containter">
          <form id="createPost">
            <h2>Create a Post</h2>
            <label>Title:</label>
            <input type="text" placeholder="Enter a Title" value={title} onChange={(event)=> setTitle(event.target.value)}></input>
            <br></br>
            <label>Description:</label>
            <input type="text" placeholder="Enter a Description" value={description} onChange={(event)=> setdescription(event.target.value)}></input>
            <br></br>
            <label>Price:</label>
            <input type="text" placeholder="Enter a Price" value={price} onChange={(event)=> setprice(event.target.value)}></input>
            <br></br>
            <label>Location:</label>
            <input type="text" placeholder="Enter a Location" value={location} onChange={(event)=> setlocation(event.target.value)}></input>
            <button id="form-submit" type="submit" onClick={handleSubmit}>Submit</button>

        </form>  
        </div>
        
        
    )
}

export default Form