const router = require("express").Router();

const userRoutes = require("./userRoutes");
const reviewRoutes = require("./reviewRoutes");

router.use("/user", userRoutes);
router.use("/reviews", reviewRoutes);

module.exports = router;
