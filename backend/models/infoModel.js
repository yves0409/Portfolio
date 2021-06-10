const mongoose = require("mongoose");


const infoSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    languages: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    services: {
        type: String,
        required: true,
      },
      bio: {
        type: String,
        required: true,
      },
      email1: {
        type: String,
        required: true,
      },
      email2: {
        type: String,
        required: true,
      },
      phone1: {
        type: String,
        required: true,
      },
      phone2: {
        type: String,
        required: true,
      },
      Address: {
        type: String,
        required: true,
      },
     },
  {
    timestamps: true,
  }
);



const Info = mongoose.model("Info", infoSchema);

module.exports = Info;