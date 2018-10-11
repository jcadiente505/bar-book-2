const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: { type: String, required: true },
    ingredients: String,
    summary: String,
    userId: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;