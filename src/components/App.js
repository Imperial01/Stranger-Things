import {React,useState} from "react";
import { Link, Route, Switch, NavLink } from "react-router-dom";
import Posts from "./Posts";
import Login from "./Login";
import Profile from "./Profile"
import Register from "./Register";
import Form from "./Form";
import FeaturedPost from "./FeaturedPost";
import './styles.css'


const App = () => {
    //const[user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    const [token, setToken] = useState('')
    const [userName, setUserName] = useState('');
    const [postID, setPostID] = useState(null)
    const [featuredPost, setFeaturedPost] = useState([])
    const [search, setSearch] = useState('')
    const [comment, setComment] = useState('')

    return <main> 
        <nav id ="navbar">
            <Link to="/home" style={{textDecoration: 'none'}}>
                <h1 id="title">Strangers Things</h1>
            </Link>
            <div id="links" >
                <NavLink to="/home" className= "navlink" activeClassName = "active">Home</NavLink> |  
                <NavLink to="/posts" className= "navlink" activeClassName = "active">Posts</NavLink> |
                <NavLink to="/profile" className= "navlink" activeClassName = "active">Profile</NavLink> |
                <NavLink to="/login" className= "navlink" activeClassName = "active">Log In</NavLink> 
            </div>
        </nav>

    
        <Switch>
            <Route exact path ="/">
                <Register token = {token} setToken = {setToken}/>
            </Route>

            <Route path="/login">
                <Login 
                token = {token} setToken = {setToken}
                userName = {userName} setUserName = {setUserName}
                />
            </Route>

            <Route path="/posts">
                <Route path="/posts/:postId"> 
                    <FeaturedPost 
                        postID = {postID} setPostID = {setPostID}
                        token = {token} posts = {posts} setPosts = {setPosts}
                        featuredPost = {featuredPost} setFeaturedPost = {setFeaturedPost}
                        userName = {userName} setSearch = {setSearch}
                    />
                </Route>
                <Posts 
                    posts = {posts} setPosts= {setPosts} 
                    token = {token} postID ={postID} setPostID = {setPostID}
                    featuredPost = {featuredPost} setFeaturedPost = {setFeaturedPost} 
                    search ={search} setSearch = {setSearch} 
                />
            </Route> 

            <Route exact path="/createform">
                <Form 
                    token = {token} setToken= {setToken} 
                    posts = {posts} setPosts = {setPosts} 
                    postID ={postID} setPostID={setPostID}/>
            </Route>

            <Route exact path= "/logout"><div>logout</div></Route>

            <Route  exact path="/home"> 
                <div id="home-container">
                    <h1 id="home-title">Welcome to Stranger Things </h1>
                    <div id="btn-container">
                        <Link exact to="/profile">
                            <button type="text" id="home-profile-btn">View Profile</button>
                        </Link>
                    </div>
                </div>
            </Route>

            <Route exact path="/profile">
                {
                token? 

                <Profile 
                    token = {token} 
                    userName = {userName}
                    postID = {postID} setSearch = {setSearch}/> : 
                    <div>
                        <Link to="/login" id="profile-title">Please Log In</Link>
                    </div>

                }
                
            </Route>
        </Switch>

    </main>
}

export default App;