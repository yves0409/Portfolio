const asyncHandler = require("express-async-handler");
const Trending = require("../models/trendingModel");

//ROUTE => GET REQUEST TO  /api/trending
//PURPOSE => GET TRENDING TOPICS
//ACCESS => PUBLIC
const trending = asyncHandler(async (req, res) => {
  await Trending.find()
    .then((trending) => res.json(trending))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = trending;
