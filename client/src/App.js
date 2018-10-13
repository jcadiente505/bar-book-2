import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { List, ListItem, ListItemText, Divider } from "@material-ui/core";
import axios from "axios";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Forum from "./pages/forum";
import User from "./pages/user";
import News from "./pages/news";

class App extends Component {
  state = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    signUp: false,
    logIn: false,
    sideNav: false,
    auth: {
      userId: "",
      username: "",
    },
  };

  componentWillMount() {
    axios.get("/auth/isAuthenticated").then((result) => {
      const { userId, username } = result.data
      this.setState({
        auth: {
          userId,
          username,
        }
      });
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    };
    this.setState({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: ""
    });
    axios.post("/auth/signup", newUser).then((user) => {
      console.log("test navbar auth post method")
      console.log(user);
      if (user.config.data.username) {
        const { userId, username } = user.data;
        this.setState({
          auth: {
            userId,
            username,
          },
          signUp: false
        });
        localStorage.setItem("userId", userId)
        window.location = '/user';
      } else {
        console.log("sign up happened")
      }
    });
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
          const { _id, username } = user.data;
          this.setState({
            auth: {
              _id,
              username,
            },
            logIn: false
          });
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
  }

  handleLogout = (event) => {
    event.preventDefault();
    axios.get("/auth/logout").then((result) => {
      this.setState({
        auth: {
          userId: "",
          username: "",
          isAuthenticated: false
        }
      });
    })
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
          <ListItem to="/user" component={Link} button onClick={this.toggleDrawer(false)}>
            <ListItemText primary="Profile" />
          </ListItem>
          <Divider />
          <ListItem to="/forum" component={Link} button onClick={this.toggleDrawer(false)}>
            <ListItemText primary="Forum" />
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
            toggleDrawer={this.toggleDrawer}
            toggleLogIn={this.toggleLogIn}
            toggleSignUp={this.toggleSignUp}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            handlelogIn={this.handlelogIn}
            handleLogout={this.handleLogout}
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
            <Route exact path="/navbar" component={Navbar} />
            <Route exact path="/forum" component={Forum} />
            <Route exact path="/user" render={(props) => <User {...user} />} />
            <Route exact path="/news" component={News} />
          </Switch>
        </div>
      </Router>
    );
  };
};



export default App;