const router = require("express").Router();
const post = require("../../models/post");
const users = require("../../models/users");

router.get("/index", (req, res) => {
  post.find({}).then((posts) => {
    res.render("admin/index", {
      style: "../../css/index.css",
      title: "Admin Home",
      posts: posts,
    });
  });
  users.find({}).then((users) => {
    res.render("admin/index", {
      style: "../../css/index.css",
      title: "Admin Home",
      users: users,
    });
  });
});

router.get("/blog/new", (req, res) => {
  res.render("admin/addblog", {
    style: "../../css/addblog.css",
    title: "Add Blog",
  });
});

module.exports = router;
