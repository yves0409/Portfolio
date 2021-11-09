const router = require("express").Router();
let Portfolio = require("../models/portfolioModel");

router.route("/").get((req, res) => {
  Portfolio.find()
    .then((portfolio) => res.json(portfolio))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const {
    image,
    title,
    category,
    description,
    frameworks,
    stack,
    git,
    thumbs,
  } = req.body;

  const newPortfolio = new Portfolio({
    image,
    title,
    category,
    description,
    frameworks,
    stack,
    git,
    thumbs,
  });

  newPortfolio
    .save()
    .then(() => res.json("portfolio added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
