const router = require("express").Router();
const { ContactModel } = require("../models/contactSchema");

router.post("/", async (req, res) => {
  try {
    const { error } = req.body;
    if (error) {
      return res.status(400).send({ message: error.details[0].massage });
    }

    await ContactModel.findOneAndDelete({ _id: req.body.id });

    res
      .status(201)
      .json({ message: "Your Contact has been deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
});

module.exports = router;
