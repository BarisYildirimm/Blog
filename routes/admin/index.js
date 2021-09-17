const router = require("express").Router();

router.get("/blog", (req, res) => {
  res.render("admin/index", {
    style: ".././css/home.css",
  });
});

router.get("/blog/new", (req, res) => {
    res.render("admin/index", {
      style: ".././css/home.css",
    });
  });


module.exports = router;
