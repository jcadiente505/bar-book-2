import React, { Component } from 'react';
import TopicList from '../../components/list';
import API from '../../utils/api';
import Slide from '@material-ui/core/Slide';

class Recipe extends Component {
  state = {
    recipes: [],
    search: "",
    open: false,
    selectedElement: ""
  }

  handleSearchChange(event) {
    event.preventDefault();
    let query = event.target.value
    this.handleSearch(query)
  }

  Transition(props) {
    return <Slide direction="up" {...props} />;
  }

  onClickElement = (element) => {
    this.setState({
      open: true,
      selectedElement: element
    })
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSearch(query) {
    let search = this.state.recipes.filter((results) => {
      console.log(results)
        return results.title.includes(query) || results.ingredients.includes(query) || results.summary.includes(query) || results.author.includes(query)
    });
    console.log(search);
    if(!query) {
      this.getAllRecipes();
    }
    else if(search === [] && query) {
      this.getAllRecipes();
    }
    else {
      this.setState({recipes: search})
    }
  }

  componentDidMount() {
    this.getAllRecipes();
  }

  getAllRecipes() {
    API.getAllRecipes()
    .then(recipes => {
      // console.log(recipes)
      this.setState({
        recipes: recipes.data
      })
      console.log(this.state.recipes);
    })
  }

  render() {
    const { selectedElement } = this.state
    return (
      <div>
        <TopicList
        recipes={this.state.recipes}
        handleSearchChange={this.handleSearchChange.bind(this)}
        handleSearch={this.handleSearch.bind(this)}
        searchRecipes={this.searchRecipes}
        open={this.state.open}
        handleClose={this.handleClose}
        Transition={this.Transition}
        handleClickOpen={this.handleClickOpen}
        onClickElement={this.onClickElement}
        selectedElement={selectedElement}
        />
      </div>
    )
  }
}


export default Recipe;