const asyncHandler = require("express-async-handler");
const Review = require("../models/reviewModel");

//ROUTE => POST REQUEST TO  /api/review/add
//PURPOSE => ADD A REVIEW
//ACCESS => PUBLIC
const addReview = asyncHandler(async (req, res) => {
  const { name, reviewText } = req.body;

  const newReview = await new Review({
    name,
    reviewText,
  });

  newReview
    .save()
    .then(() => res.json("Review added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = addReview;
