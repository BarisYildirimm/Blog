const router = require("express").Router();

router.get("/blog", (req, res) => {
  res.render("admin/index");
});

module.exports = router;
