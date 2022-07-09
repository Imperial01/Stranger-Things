const cohortName = "2204-FTB-MT-WEB-PT";
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/`;

export const fetchAllPost = async () => {
    const response = await fetch(`${APIURL}/posts`);
    const result = await response.json();
    return (result.data.posts)
  };


export const fetchRegister = async ({userName}, {password}) => {
  fetch(`${APIURL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: 'superman27',
        password: 'krypt0n0rbust'

    //Example user.username, user.password only working and giving a token. 
        // Tried my username: "Adrian" and password:"12321"
        // 'error:
                //message: "User already exists, please login instead."
                //name: "UserExists" '
      }
    })
  }).then(response => response.json())
    .then(result => {
      console.log(result)
    })
    .catch(console.error)
}