const express = require("express");
const router = express.Router();
const background = require("../controllers/backgroundController");

router.route("/").get(background);

module.exports = router;
