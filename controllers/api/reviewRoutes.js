const router = require("express").Router();
const { Review } = require("../../models");
const withAuth = require("../../utils/auth");

<<<<<<< HEAD

router.post('/',  async (req, res) => {
=======
router.post("/", withAuth, async (req, res) => {
>>>>>>> 37f85cc200509d241cbf659a752b5c3e055f4f2b
  try {
    const newReview = await Review.create({
      ...req.body,
      date_created: Date.now(),
      user_id: req.session.user_id,
      name: req.session.user_name,
    });
    console.log(newReview);
    res.status(200).json(newReview);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const reviewData = await Review.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!reviewData) {
      res.status(404).json({ message: "No review found with this id!" });
      return;
    }
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const reviewData = await Review.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!reviewData) {
      res.status(404).json({ message: "No review found with this id!" });
      return;
    }

    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
