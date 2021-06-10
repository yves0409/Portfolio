const mongoose = require("mongoose");


const backgroundSchema = mongoose.Schema(
  {
   year: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);



const Background = mongoose.model("Background", backgroundSchema);

module.exports = Background;