const userController = require("../controllers/userController");
module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();


	//add any API routes here
	router.post("/recipe");

	return router;
};