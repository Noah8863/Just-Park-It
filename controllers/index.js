const router = require("express").Router();

const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.get("/", (req, res) => {
  res.render("homePage");
});
router.get("/login", (req, res) => {
  res.render("loginPage");
});
router.get("/signup", (req, res) => {
  res.render("signup");
});


module.exports = router;