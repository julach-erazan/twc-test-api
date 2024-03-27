const router = require("express").Router();
const { ContactModel } = require("../models/contactSchema");

router.get("/", async (req, res) => {
  try {
    const { error } = req.body;
    if (error) {
      return res.status(400).send({ message: error.details[0].massage });
    }

    const contacts = await ContactModel.find();

    res.status(201).json({ data: contacts });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
});

module.exports = router;
