import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { List, ListItem, ListItemText, Divider } from "@material-ui/core";
import axios from "axios";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Recipe from "./pages/recipes";
import User from "./pages/user";
import News from "./pages/news";

class App extends Component {
  state = {
    username: "",
    password: "",
    signUp: false,
    logIn: false,
    sideNav: false,
    auth: {
      userId: "",
      username: "",
      isAuthenticated: false
    },
    isLoggedIn: false
  };

  componentDidMount() {
    axios.get("/auth/isAuthenticated").then((result) => {
      console.log(result);
      const { userId, username, isAuthenticated } = result.data
      this.setState({
        auth: {
          userId,
          username,
          isAuthenticated
        }
      });
      if(this.state.auth.isAuthenticated) {
      this.setState({
        isLoggedIn: true
        })
      }
      console.log(this.state.isLoggedIn)
      // console.log(this.state.auth)
    })
    .catch(err => {
      if (err) {
          console.log(err)
        }
    });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("test navbar.js")
    //call a sign In function
    const newUser = {
      username: this.state.username,
      password: this.state.password,
    };
    this.setState({
      username: "",
      password: "",
    });
    axios.post("/auth/signup", newUser).then((user) => {
        console.log("test navbar auth post method")
        console.log(user);
        if (user.data.username) {
          const { _id, username } = user.data;
          this.setState({
            auth:{
              _id,
              isAuthenticated: true,
              username
            }
          });
          console.log(this.state.isLoggedIn)
          window.location = '/user';
          localStorage.setItem("userId", _id);
          const localId = localStorage.getItem("userId")
          console.log(localId)
          // hide modal
          // window.location
          console.log('Logged In');
        } else {
          console.log('Not logged In');
        }
        console.log('After logging in');
        // window.location = '/user';
      })
  }

  handlelogIn = (event) => {
    event.preventDefault()
    console.log("test login function")
    const userLogin = {
      username: this.state.username,
      password: this.state.password
    }
    console.log(userLogin)
    axios.post("/auth/login", userLogin)
      .then((user) => {
        console.log(user)
        if (user.data.username) {
          const { _id, username, isAuthenticated } = user.data;
          this.setState({
            auth: {
              _id,
              username,
              isAuthenticated
            },
            logIn: false
          });
          this.setState({
            isLoggedIn: true
          })
          console.log(this.state.isLoggedIn)
          localStorage.setItem("userId", _id)
          window.location = '/user';
          // hide modal
          // window.location
          console.log('Logged In');
        } else {
          console.log('Not logged In');
        }
        console.log('After logging in');
      })
      .catch(err => {
        if (err) throw err
      })
  }

  handleLogOut = (event) => {
    event.preventDefault();
    axios.get("/auth/logout").then((result) => {
      localStorage.removeItem("userId");
      this.setState({
        auth: {
          userId: "",
          username: "",
          isAuthenticated: false
        }
      });
      this.setState({
        isLoggedIn: false
      })
    })
    window.location = "/"
    console.log(this.state.isLoggedIn)
  };

  toggleDrawer = (open) => () => {
    this.setState({
      sideNav: open
    })
  }

  toggleSignUp = (open) => () => {
    this.setState({
      signUp: open
    })
  }

  toggleLogIn = (open) => () => {
    this.setState({
      logIn: open
    })
  }

  
  render() {
    const user = this.state.auth
    const sideNavMenu = (
      <div style={{ width: 200 }}>
        <List>
          <ListItem to="/" component={Link} button onClick={this.toggleDrawer(false)}>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          {!this.state.isLoggedIn ? (
              <ListItem to="/user" component={Link} button disabled="true" onClick={this.toggleDrawer(false)}>
              <ListItemText primary="Profile" />
              </ListItem>  
          ) : (
            <ListItem to="/user" component={Link} button onClick={this.toggleDrawer(false)}>
            <ListItemText primary="Profile" />
            </ListItem>
          )}
          <Divider />
          <ListItem to="/recipes" component={Link} button onClick={this.toggleDrawer(false)}>
            <ListItemText primary="Recipe's" />
          </ListItem>
          <Divider />
          <ListItem to="/news" component={Link} button onClick={this.toggleDrawer(false)}>
            <ListItemText primary="News" />
          </ListItem>
          <Divider />
        </List>
      </div>
    )
    return (
      <Router>
        <div>
          <Navbar
            isLoggedIn={this.state.isLoggedIn}
            toggleDrawer={this.toggleDrawer}
            toggleLogIn={this.toggleLogIn}
            toggleSignUp={this.toggleSignUp}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            handlelogIn={this.handlelogIn}
            handleLogOut={this.handleLogOut}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            username={this.state.username}
            email={this.state.email}
            password={this.state.password}
            logIn={this.state.logIn}
            signUp={this.state.signUp}
            sideNav={this.state.sideNav}
            sideNavMenu={sideNavMenu} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/recipes" component={Recipe} />
            <Route exact path="/user" render={(props) => <User {...user} />} />
            <Route exact path="/news" component={News} />
          </Switch>
        </div>
      </Router>
    );
  };
};



export default App;