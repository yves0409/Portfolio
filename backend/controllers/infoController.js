const asyncHandler = require("express-async-handler");
const Info = require("../models/infoModel");

//ROUTE => GET REQUEST TO  /api/info
//PURPOSE => GET INFO
//ACCESS => PUBLIC
const info = asyncHandler(async (req, res) => {
  await Info.find()
    .then((info) => res.json(info))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = info;
