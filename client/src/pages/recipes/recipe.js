import React, { Component } from 'react';
import TopicList from '../../components/list';
import API from '../../utils/api';

class Recipe extends Component {
  state = {
    recipes: []
  }

  componentDidMount() {
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
        recipes={this.state.recipes}/>
      </div>
    )
  }
}


export default Recipe;