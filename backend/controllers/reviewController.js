const asyncHandler = require("express-async-handler");
const Review = require("../models/reviewModel");

//ROUTE => GET REQUEST TO  /api/review
//PURPOSE => GET REVIEWs
//ACCESS => PUBLIC
const review = asyncHandler(async (req, res) => {
  await Review.find()

    .then((review) => res.json(review))
    .catch((err) => res.status(400).json("Error: " + err));
});

// const Addreview = asyncHandler(async (req, res) => {
// router.route("/add").post((req, res) => {
//   const { name, reviewText } = req.body;

//   const newReview = new Review({
//     name,
//     reviewText,
//   });

//   newReview
//     .save()
//     .then(() => res.json("Review added"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

module.exports = review;
