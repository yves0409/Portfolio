const express = require("express");
const router = express.Router();
const trending = require("../controllers/trendingController");

router.route("/").get(trending);

module.exports = router;
