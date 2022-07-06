import {React,useState} from "react";
import { Link, Route, Switch } from "react-router-dom";
import Posts from "./Posts";
import Login from "./Login";
import Profile from "./Profile"
import './styles.css'


const App = () => {

    const [posts, setPosts] = useState([])
    const [token, setToken] = useState('')

    return <main>
        <nav>
            <h1 id="title">Strangers Things</h1>
            <div id="links">
                <Link to="/home">Home</Link> |  
                <Link to="/posts">Posts</Link> |
                <Link to="/profile">Profile</Link> |
                <Link to="/logout">Log Out</Link> 
            </div>
        </nav>

        <Switch>
            <Route exact path="/home">
                <h1 id="home-title">Welcome to Stranger Things </h1>
                <button type="text" id="home-profile-btn">View Profile</button>
                </Route>
            <Route exact path="/profile"><Profile /> </Route>
            <Route exact path="/posts"><Posts /> </Route> 
            <Route path="/login"><Login /></Route>
            <Route path= "/register"><div>register</div></Route>
            <Route path= "/logout"><div>logout</div></Route>
        </Switch>

    </main>
}

export default App;