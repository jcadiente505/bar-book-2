const userController = require("../controllers/userController");
const recipeController = require("../controllers/recipeController");
const articleController = require("../controllers/articleController");

module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();


	//add any API routes here
	router.route("/recipes")
	.post(recipeController.addRecipe);

	router.route("/user/:id")
	.get(userController.findUser);

	router.route("/articles/scraper")
	.get(articleController.scrapeArticles);

	router.route("/articles")
	.get(articleController.getArticles)
	.post(articleController.saveArticles);

	return router;
};