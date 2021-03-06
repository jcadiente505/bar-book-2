const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    comments: [
        {
        type: Schema.Types.ObjectId,
        ref: "Comments"
        }
    ]
});

const Topic = mongoose.model("Topic", TopicSchema);

module.exports = Topic;