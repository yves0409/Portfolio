const router = require("express").Router();
let Info = require("../models/infoModel");

router.route("/add").post((req, res) => {
  const {
    first_name,
    last_name,
    languages,
    image,
    profilepicture,
    location,
    contract,
    bio,
    email1,
    email2,
    phone1,
    phone2,
    Address,
    services,
    skills,
  } = req.body;

  const newInfo = new Info({
    first_name,
    last_name,
    languages,
    image,
    profilepicture,
    location,
    contract,
    bio,
    email1,
    email2,
    phone1,
    phone2,
    Address,
    services,
    skills,
  });

  newInfo
    .save()
    .then(() => res.json("info added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
