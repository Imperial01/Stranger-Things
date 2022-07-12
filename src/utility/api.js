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
  console.log(result)

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
  console.log(result.data.token)
  return (result.data.token)
}

  // .then(response => response.json())
  //   .then(result => {
  //     console.log(result.data.token)
  //     return (result.data.token)
  //   })
  //   .catch(console.error)



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
  
//   .then (response => response.json())
//     .then(result => {
//       console.log(result)
//     })
//     .catch(console.error) 
// }