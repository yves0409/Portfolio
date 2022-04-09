const mongoose = require("mongoose");

const infoSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: false,
    },
    last_name: {
      type: String,
      required: false,
    },
    languages: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: false,
    },
    services: {
      type: String,
      required: false,
    },
    bio: {
      type: String,
      required: false,
    },
    email1: {
      type: String,
      required: false,
    },
    email2: {
      type: String,
      required: false,
    },
    phone1: {
      type: String,
      required: false,
    },
    phone2: {
      type: String,
      required: false,
    },
    Address: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Info = mongoose.model("Info", infoSchema);

module.exports = Info;
