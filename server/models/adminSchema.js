const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
});

const AdminModel = mongoose.model("admins", adminSchema);

module.exports = { AdminModel };
