const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    comment: {
        type: String,
        required: true
    }
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;