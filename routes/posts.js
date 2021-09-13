const express = require("express");
const post = require("../models/post");
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("site/addpost", {
    title: "Add Post",
    style: "../css/addpost.css",
  });
});

router.get("/:id", (req, res) => {
  post.findById(req.params.id).then((post) => {
    res.render("site/post", {
      post: post,
      title: "Post",
      style: "../css/post.css",
    });
  });
});

router.post("/add", (req, res) => {
  post.create(req.body);
  res.redirect("/");
});

module.exports = router;
