import React, { Component } from 'react';
import TopicList from '../../components/list';
import API from '../../utils/api';

class Recipe extends Component {
  state = {
    recipes: []
  }

  handleSearch(event) {
    event.preventDefault();
    let query = event.target.value
    let search = this.state.recipes.filter(results => {
      return results.title.includes(query) || results.ingredients.includes(query) || results.summary.includes(query)
    });
    if (search) {
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
    return (
      <div>
        <TopicList
        recipes={this.state.recipes}
        handleSearch={this.handleSearch.bind(this)}
        searchRecipes={this.searchRecipes}/>
      </div>
    )
  }
}


export default Recipe;