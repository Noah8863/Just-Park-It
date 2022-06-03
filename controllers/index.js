//Outer Index
const router = require("express").Router();
const Review = require("../models/Review")
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.get("/", async (req, res) => {
  const result = await Review.findAll({})
  const allReviews = result.map(review => {
    return review.get({
      plain: true
    })
  })
  console.log(allReviews)
  res.render("homePage", {
    reviews: allReviews
  });
});
router.get("/login", (req, res) => {
  res.render("loginPage");
});
router.get("/signup", (req, res) => {
  res.render("signup");
});
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
