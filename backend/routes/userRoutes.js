const express = require("express");
const router = express.Router();
const registerUser = require("../controllers/registerController.js");
const authUser = require("../controllers/loginController.js");
//import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser);
router.route("/login").post(authUser);

module.exports = router;
