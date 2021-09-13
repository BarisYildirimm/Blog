const express = require("express");
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("site/addpost", {
    title: "Add Post",
    style: "../css/addpost.css",
  });
});

module.exports = router;
