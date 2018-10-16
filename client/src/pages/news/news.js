import React, { Component } from 'react'
import API from "../../utils/api";
import ArticleCard from "../../components/articleCard";

class Forum extends Component {
  state = {
    saved: true,
    articles: []
  }

  componentWillMount() {
    this.articleScraper();
    };

  articleScraper = () => {
    console.log("Article scraper")
    API.scrapeArticles()
    .then(articles => {
      this.setState({
        articles: articles.data
      })
      console.log(this.state.articles);
    })
  }

  saveArticles = (article, event) => {

    const userId = localStorage.getItem("userId")
    event.preventDefault();
    const savedArticle = {
      title: article.title,
      summary: article.summary,
      link: article.link,
      image: article.image,
      id: userId
    }
    console.log(savedArticle)
    API.saveArticles(savedArticle)
    .then(response => {
      console.log(response);
    })
  }

  render() {
    return (
      <div>
        <ArticleCard 
        articles={this.state.articles}
        saveArticles={this.saveArticles}
        />
      </div>
    )
  }
}


export default Forum;