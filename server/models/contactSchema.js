const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  userName: { type: String, require: true },
  email: { type: String, require: true },
  phoneNumber: { type: String, require: true },
  gender: { type: String, require: true },
});

const ContactModel = mongoose.model("contacts", contactSchema);

module.exports = { ContactModel };
