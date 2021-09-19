const express = require("express");
const router = express.Router();
const users = require("../models/users");

router.get("/register", (req, res) => {
  res.render("site/register", {
    style: "../css/register.css",
    title: "Register",
  });
});

router.get("/login", (req, res) => {
  res.render("site/login", {
    style: "../css/login.css",
    title: "Login",
  });
});

router.post("/new", (req, res) => {
  users.create(req.body, (err, users) => {
    if (!err) {
      res.redirect("/");
    }
    console.log("sıçtık");
  });
});

module.exports = router;
