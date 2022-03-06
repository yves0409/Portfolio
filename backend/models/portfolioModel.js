const mongoose = require("mongoose");

const portfolioSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
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
    stack: {
      type: String,
      required: true,
    },
    git: {
      type: String,
      required: true,
    },
    thumbs: [
      {
        image: {
          type: String,
          required: true,
        },
        legend: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;
