const express = require("express");
const router = express.Router();
const registerUser = require("../controllers/registerController.js");
const authUser = require("../controllers/userController.js");
//import { protect, admin } from "../middleware/authMiddleware.js";


//CLEANER WAY IS WE IMPORT ALL THE ROUTES FROM A CONTROLLER FILE WHERE ALL THE ROUTES ARE DEFINED
router.route("/").post(registerUser)
//router.post("/login", authUser);
router.route("/login").post(authUser)

//export default router;
module.exports = router
