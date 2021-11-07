const router = require("express").Router();
let Review = require("../models/reviewModel");

router.route("/").get((req, res) => {
  Review.find()
    .then((review) => res.json(review))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const { name, reviewText } = req.body;

  const newReview = new Review({
    name,
    reviewText,
  });

  newReview
    .save()
    .then(() => res.json("Review added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
