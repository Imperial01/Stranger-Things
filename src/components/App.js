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
    const [postID, setPostID] = useState(null)
    const [featuredPost, setFeaturedPost] = useState(false)

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
                <Login token = {token} setToken = {setToken}/>
            </Route>

            <Route exact path="/posts">
                <Route exact path="/posts/:postId"> 
                    <FeaturedPost 
                        postID = {postID} setPostID = {setPostID}
                        featuredPost = {featuredPost} setFeaturedPost = {setFeaturedPost} 
                    />
                </Route>
                <Posts 
                    posts = {posts} setPosts= {setPosts} 
                    token = {token} postID ={postID} 
                    featuredPost = {featuredPost} setFeaturedPost = {setFeaturedPost} 
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
                <Profile />
                {/* token={setToken} */}
            </Route>
        </Switch>

    </main>
}

export default App;