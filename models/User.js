const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    userCreated: {
        type: Date,
        default: Date.now
    },
    recipes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Recipe"
        }
    ],
    articles: [
        {
            type: Schema.Types.ObjectId,
            ref: "Article"
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});
//passport-local-mongoose creates a 'username' and some 'password' fields for you
//you can add some other fields here too if you like

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);