const express = require("express");
const router = express.Router();
const info = require("../controllers/infoController");

router.route("/").get(info);

module.exports = router;
