const mongoose = require("mongoose");


const likeSchema = mongoose.Schema(
  {
    likes: {
      type:String,
      required: false,
    },
    },
  {
    timestamps: true,
  }
);



const Like = mongoose.model("Like", likeSchema);

module.exports = Like;