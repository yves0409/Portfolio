const mongoose = require("mongoose");

const likeSchema = mongoose.Schema(
  {
    likeCount: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
