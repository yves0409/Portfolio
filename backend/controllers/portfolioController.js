const asyncHandler = require("express-async-handler");
const Portfolio = require("../models/portfolioModel");

//ROUTE => GET REQUEST TO  /api/portfolio
//PURPOSE => GET PORTFOLIOS
//ACCESS => PUBLIC
const portfolio = asyncHandler(async (req, res) => {
  await Portfolio.find()
    .then((portfolio) => res.json(portfolio))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = portfolio;
