const express = require("express");
const post = require("../models/post");
const path = require("path");
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
  let postImage = req.files.postImage;
  let authorImage = req.files.authorImage;

  postImage.mv(
    path.resolve(__dirname, "../public/img/postImage", postImage.name)
  );
  authorImage.mv(
    path.resolve(__dirname, "../public/img/authorImage", authorImage.name)
  );

  post.create({
    ...req.body,
    postImage: `../img/PostImage/${postImage.name}`,
    authorImage: `../img/authorImage/${authorImage.name}`,
  });
  res.redirect("/");
});

module.exports = router;
