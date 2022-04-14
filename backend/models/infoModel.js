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
      required: false,
    },
    profilepicture: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    contract: {
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
    address: {
      type: String,
      required: false,
    },
    services: [
      {
        serviceimage: {
          type: String,
          required: false,
        },
        title: {
          type: String,
          required: false,
        },
        url: {
          type: String,
          required: false,
        },
        paragraph: {
          type: String,
          required: false,
        },
      },
    ],
    skills: [
      {
        title: {
          type: String,
          required: false,
        },
        percentage: {
          type: String,
          required: false,
        },
        img: {
          type: String,
          required: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Info = mongoose.model("Info", infoSchema);

module.exports = Info;
