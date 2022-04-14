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

// router.route("/add").post((req, res) => {
//   const {
//     first_name,
//     last_name,
//     languages,
//     location,
//     services,
//     bio,
//     email1,
//     email2,
//     phone1,
//     phone2,
//     Address,
//     PageLikes,
//   } = req.body;

//   const newInfo = new Info({
//     first_name,
//     last_name,
//     languages,
//     location,
//     services,
//     bio,
//     email1,
//     email2,
//     phone1,
//     phone2,
//     Address,
//     PageLikes,
//   });

//   newInfo
//     .save()
//     .then(() => res.json("info added"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

//module.exports = router;
