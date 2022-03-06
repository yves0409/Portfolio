const router = require("express").Router();
let Like = require("../models/likeModel");

//FETCHING THE LIKE COUNT
router.route("/").get((req, res) => {
  Like.find()
    .then((like) => res.json(like))
    .catch((err) => res.status(400).json("Error: " + err));
});

//UPDATING THE LIKE COUNT
router.route("/:id").put(async (req, res) => {
  try {
    const { likeCount } = req.body;
    const updated = await Like.findByIdAndUpdate(
      req.params.id,

      { likeCount }
    );
    console.log("server log ==>", likeCount);
    res.json(updated);
  } catch (error) {
    res.json(400).send("Failed to update category");
  }
});

module.exports = router;
