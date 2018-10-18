const db = require("../models");

module.exports = {
    addRecipe: function(req, res) {
        // console.log("addRecipe Function")
        // console.log("======================")
        // console.log(req.body)
        db.Recipe.create(req.body)
        .then(recipe => {
            console.log(recipe)
            return db.User.findOneAndUpdate({ _id: req.body.id }, { $push: { recipes: recipe._id}}, { new:true });
        })
        .then(userInfo => {
            res.json(userInfo);
        })
    }
}