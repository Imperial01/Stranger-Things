const cohortName = "2204-FTB-MT-WEB-PT";
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

export const fetchAllPost = async () => {
  const response = await fetch(`${APIURL}/posts`);
  const result = await response.json();
    return (result.data.posts)
  };


export const fetchCreateForm = async (token, title, description, price, location) => {
  const response = await fetch(`${APIURL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      post: {
        title: title,
        description: description,
        price: price,
        location: location
      }
    })
  })
  const result = await response.json();
  console.log(result.data.post)
  return result.data.post 

}

export const fetchRegister = async (userName, password) => {
  const response = await fetch(`${APIURL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: userName,
        password: password
      }
    })
    
  })
  const result = await response.json();
  return (result.data.token)
}


export const fetchLogin = async (userName, password) => {
  const response = await fetch(`${APIURL}/users/login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: userName,
        password: password 
      }
    })
  })

  const result = await response.json()
  console.log(result.data.token)
  return result.data.token
}

export const fetchDelete = async (token, postID, selectedPost, posts, setPosts) => {
  const response = await fetch(`${APIURL}/posts/${postID}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  const result = await response.json()
  console.log(result)
  if (result.success){
    window.confirm('Are you sure you want to DELETE this post?')
    const newPost = posts.filter(post => post._id !== selectedPost)
    console.log(newPost)
    setPosts(newPost)
  } else{
    alert("UNAUTHORIZED TO DELETE")
  }
  
}