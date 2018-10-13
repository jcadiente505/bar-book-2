const db = require("../models");
const ObjectId = require('mongodb').ObjectID;
const mongoose = require('mongoose')

module.exports = {
    findUser: function(req, res) {
        console.log(req.params)
        const userId = req.params.id
        console.log(userId)
        console.log("USER CONTROLLER")
        console.log("=============================================")
        db.User.findOne( {_id: ObjectId(userId)} )
        .populate("recipes")
        .populate("articles")
        .populate("topics")
        .then(userInfo => {
            console.log(userInfo);
            res.json(userInfo)
        });
    }
}