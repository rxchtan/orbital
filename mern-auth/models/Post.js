const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
    title: String,
    country: String,
    category: String,
    location: String,
    budget: String,
    review: String,
    likes: Number
});
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;