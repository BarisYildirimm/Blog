const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  author: { type: String, required: true },
  postImage: { type: String, required: true },
  authorImage: { type: String, required: true },
});

module.exports = mongoose.model("post", PostSchema);
