const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: { type: String, required: true },
    ingredients: String,
    summary: String,
    public: false,
    author:  String
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;