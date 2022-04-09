const asyncHandler = require("express-async-handler");
const Background = require("../models/backgroundModel");

//ROUTE => GET REQUEST TO  /api/background
//PURPOSE => GET BACKGROUNDINFO
//ACCESS => PUBLIC
const background = asyncHandler(async (req, res) => {
  await Background.find()
    .then((background) => res.json(background))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = background;
