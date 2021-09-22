const mongoose = require("mongoose");

const portfolioSchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    link1: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    frameworks: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;
