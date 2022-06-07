//Outer Index
const router = require("express").Router();
const Review = require("../models/Review");
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.get("/", async (req, res) => {
  const result = await Review.findAll({});
  const allReviews = result.map((review) => {
    return review.get({
      plain: true,
    });
  });
  console.log(allReviews);
  res.render("homePage", {
    reviews: allReviews,
  });
});
router.get("/login", (req, res) => {
  res.render("loginPage");
});
router.get("/dashboard", (req, res) => {
  res.render("dashboard", {
    logged_in: req.session.logged_in,
    user_name: req.session.user_name,
  });
});



module.exports = router;
