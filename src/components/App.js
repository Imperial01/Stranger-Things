import {React,useState} from "react";
import { Link, Route, Switch, NavLink } from "react-router-dom";
import Posts from "./Posts";
import Login from "./Login";
import Profile from "./Profile"
import Register from "./Register";
import './styles.css'


const App = () => {
    // const[user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    const [token, setToken] = useState('')

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

        <Route exact path ="/">
            <Login />
            <Register />
            
        </Route>

        <Switch>
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
            </Route>
            <Route exact path="/login"><Login /></Route>
            <Route exact path="/posts"><Posts /> </Route> 
            <Route exact path= "/register"><div>register</div></Route>
            <Route exact path= "/logout"><div>logout</div></Route>
        </Switch>

    </main>
}

export default App;