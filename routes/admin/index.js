const router = require("express").Router();

router.get("/home", (req, res) => {
  res.render("admin/index", {
    style: "../../css/index.css",
    title: "Admin Home",
  });
});

router.get("/blog/new", (req, res) => {
  res.render("admin/addblog", {
    style: "../../css/addblog.css",
    title: "Add Blog",
  });
});


module.exports = router;
