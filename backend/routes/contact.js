const router = require("express").Router();
let Contact = require("../models/contactModel");

router.route("/").get((req, res) => {
  Contact.find()
    .then((contact) => res.json(contact))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const { icon, title, contact1, contact2 } = req.body;

  const newContact = new Contact({
    icon,
    title,
    contact1,
    contact2,
  });

  newContact
    .save()
    .then(() => res.json("contact added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
