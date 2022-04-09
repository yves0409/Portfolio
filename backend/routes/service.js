const express = require("express");
const router = express.Router();
const service = require("../controllers/serviceController");
const addService = require("../controllers/addServiceController");

router.route("/").get(service);
router.route("/add").post(addService);

module.exports = router;
