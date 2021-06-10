const mongoose = require("mongoose");


const contactSchema = mongoose.Schema(
  {
    icon: {
      type: String,
      required: true,
      },
    title: {
      type: String,
      required: true,
    },
    contact1: {
      type: String,
      required: true,
    },
    contact2: {
      type: String,
      required: true,
    },
    },
  {
    timestamps: true,
  }
);



const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;