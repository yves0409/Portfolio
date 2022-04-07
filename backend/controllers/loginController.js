const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");
const generateToken = require("../utils/generateToken.js");

//ROUTE => POST REQUEST TO  /api/users/login
//PURPOSE => AUTHENTICATE USER & GET TOKEN
//ACCESS => PUBLIC
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  //IF USER IS TRUE AND EMAIL/PASSWORD MATCH DATA GETS RETURNED
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

module.exports = authUser;
