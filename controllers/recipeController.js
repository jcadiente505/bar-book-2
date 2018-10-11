const db = require("../models");

module.exports = {
    addRecipe: function(req, res) {
        console.log(req.body)

        db.Recipe.collection.insert(req.body, (error, recipe) => {
            if (error) {
                console.log(error)
            }
            else {
                res.json(recipe)
            }
        })
    }
}