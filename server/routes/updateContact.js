const router = require("express").Router();
const { ContactModel } = require("../models/contactSchema");

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    await ContactModel.updateOne({ _id: req.body.id }, { $set: req.body });
    res.status(201).json({ message: "Update Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
});

module.exports = router;
