const cohortName = "2204-FTB-MT-WEB-PT";
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/`;

export const fetchAllPost = async () => {
    const response = await fetch(`${APIURL}/posts`);
    const result = await response.json();
    return (result.data.posts)
  };