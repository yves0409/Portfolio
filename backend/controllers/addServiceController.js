const asyncHandler = require("express-async-handler");
const Service = require("../models/serviceModel");

//ROUTE => POST REQUEST TO  /api/service/add
//PURPOSE => ADD A SERVICE
//ACCESS => PUBLIC
const addService = asyncHandler(async (req, res) => {
  const { image, title, url, paragraph } = req.body;

  const newService = await new Service({
    image,
    title,
    url,
    paragraph,
  });

  newService
    .save()
    .then(() => res.json("Service added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = addService;
