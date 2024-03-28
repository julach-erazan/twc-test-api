const router = require("express").Router();
const { ContactModel } = require("../models/contactSchema");

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    await ContactModel.create(req.body);

    res
      .status(201)
      .json({ message: "Your Contact has been saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
    return;
  }
});

module.exports = router;
