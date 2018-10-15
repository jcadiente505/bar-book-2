const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");
const logger = require("morgan");
const mongoose = require("mongoose");

module.exports = {
    scrapeArticles: function(req, res) {
        console.log(" ARTICLE SCRAPER ")
        console.log("===========================")
            // AXIOS get request to liquor.com news article section
        axios.get("https://www.liquor.com/discover/#gs.NjJIXmk").then(response => {
            console.log("Axios scraper call")
            // Load the Liquor.com HTML into cheerio
            const $ = cheerio.load(response.data);
            const articles = [];

            $("div.card").each((i, element) => {
                console.log("Looping")
                // assign each piece of html we want too a variable
                let title = $(element).find("div.copy").children("h3").text();
                let summary = $(element).find("div.copy").children("div.archive-item-text").text();
                let image = $(element).find("div.image").attr("data-href")
                let link = $(element).find("div.image").children("a.overlay").attr("href");
                
                console.log(title)
                console.log(summary)
                console.log(link)
                console.log(image)

                let article = {
                    title: title,
                    summary: summary,
                    image: image,
                    link: link,
                    saved: false
                }
                articles.push(article);
            })
            res.json(articles);
        })
    },

    getArticles: function(req, res) {
        console.log("======= FIND ARTICLES =========")
        db.Article.find({})
        .then(articles => {
            res.json(articles)
        })
    }
}