const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
