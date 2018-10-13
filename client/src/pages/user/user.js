import React, { Component } from 'react';
import UserCard from "../../components/card";
import FullWidthTabs from "../../components/tabs";
import API from "../../utils/api";
import { Slide } from "@material-ui/core"

class User extends Component {
  state = {
    value: 0,
    modalOpen: false,
    title: "",
    ingredients: "",
    summary: "",
    user: {
      username: "",
      recipes: [],
      articles: [],
      topics: []
    }
  }

  componentWillMount() {
    this.loadUserInfo()
  }

  loadUserInfo = () => {
    const userId = localStorage.getItem("userId")
    API.getUser(userId)
      .then(res => {
        console.log(res)
        this.setState({
          user: {
            username: res.data.username,
            recipes: res.data.recipes,
            articles: res.data.articles,
            topics: res.data.topics
          }
        })
        console.log(this.state.user)
      })
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handleClickOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }

  handleRecipeSubmit = (event) => {
    event.preventDefault();
    const userId = localStorage.getItem("userId")
    const newRecipe = {
      id: userId,
      title: this.state.title,
      ingredients: this.state.ingredients,
      summary: this.state.summary
    };
    console.log(newRecipe);
    API.addRecipe(newRecipe)
    .then(response => {
      console.log(response);
      this.loadUserInfo();
      this.handleClose();
    })
  }

  Transition = (props) => {
    return <Slide direction="up" {...props} />;
}
  render() {
    return (
      <div>
        <UserCard
          username={this.state.user.username}
          handleClickOpen={this.handleClickOpen}
          handleClose={this.handleClose}
          Transition={this.Transition}
          open={this.state.modalOpen}
          handleInputChange={this.handleInputChange}
          handleRecipeSubmit={this.handleRecipeSubmit}
          title={this.state.title}
          ingredients={this.state.ingredients}
          summary={this.state.summary}
        />
        <FullWidthTabs 
          value={this.state.value}
          handleChange={this.handleChange}
          handleChangeIndex={this.handleChangeIndex}
          recipes={this.state.user.recipes}
          articles={this.state.user.articles}
          topics={this.state.user.topics}
        />
      </div>
    )
  }
}

export default User
