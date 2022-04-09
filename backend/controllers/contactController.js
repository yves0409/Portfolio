const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//ROUTE => GET REQUEST TO  /api/contact
//PURPOSE => GET CONTACT INFO
//ACCESS => PUBLIC
const contact = asyncHandler(async (req, res) => {
  await Contact.find()
    .then((contact) => res.json(contact))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = contact;
