const asyncHandler = require("express-async-handler");
const Service = require("../models/serviceModel");

//ROUTE => GET REQUEST TO  /api/service
//PURPOSE => GET SERVICES
//ACCESS => PUBLIC
const service = asyncHandler(async (req, res) => {
  await Service.find()

    .then((service) => res.json(service))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = service;
