const express = require("express");
const router = express.Router();
const review = require("../controllers/reviewController");
const addReview = require("../controllers/addReviewController");

router.route("/").get(review);
router.route("/add").post(addReview);

module.exports = router;
