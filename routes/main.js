const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("site/home", {
    title: "Home Page",
    style: "./css/home.css",
  });
});

router.get("/blog", (req, res) => {
  res.render("site/blog", {
    title: "Blog",
    style: "./css/blog.css",
  });
});

router.get("/contact", (req, res) => {
  res.render("site/contact", {
    title: "Contact",
    style: "./css/contact.css",
  });
});

module.exports = router;
