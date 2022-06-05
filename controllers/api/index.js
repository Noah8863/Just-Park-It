const router = require("express").Router();
const userRoutes = require("./userRoutes");
const reviewRoutes = require("./reviewRoutes");
// const homeRoutes = require("./homeRoutes");

router.use("/user", userRoutes);
router.use("/reviews", reviewRoutes);
// router.use("/", homeRoutes);

module.exports = router;
