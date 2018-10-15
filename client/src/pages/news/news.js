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

  saveArticle = event => {

    const userId = localStorage.getItem("userId")
    event.preventDefault();
    const article = {
      title: this.title,
      summary: this.summary,
      link: this.link,
      image: this.image,
      userId: userId
    }
    console.log(article)
    // API.saveArticle()
  }

  render() {
    return (
      <div>
        <ArticleCard 
        articles={this.state.articles}
        saveArticle={this.saveArticle}
        />
      </div>
    )
  }
}


export default Forum;