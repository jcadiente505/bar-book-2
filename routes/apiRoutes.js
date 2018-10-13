const userController = require("../controllers/userController");
const recipeController = require("../controllers/recipeController");

module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();


	//add any API routes here
	router.route("/recipes")
	.post(recipeController.addRecipe);

	router.route("/user/:id")
	.get(userController.findUser)

	return router;
};