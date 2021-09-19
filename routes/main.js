const express = require("express");
const post = require("../models/post");
const users = require("../models/users");
const router = express.Router();

router.get("/", (req, res) => {
  post.find({}).then((posts) => {
    res.render("site/home", {
      title: "Home Page",
      style: "./css/home.css",
      posts: posts,
    });
  });
});

router.get("/blog", (req, res) => {
  post.find({}).then((posts) => {
    res.render("site/blog", {
      title: "Blog",
      style: "./css/blog.css",
      posts: posts,
    });
  });
});

router.get("/contact", (req, res) => {
  res.render("site/contact", {
    title: "Contact",
    style: "./css/contact.css",
  });
});

module.exports = router;
