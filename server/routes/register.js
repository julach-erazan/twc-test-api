const router = require("express").Router();
const { AdminModel } = require("../models/adminSchema");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  try {
    const email = req.body.email.toLowerCase();
    // Check if email already exists
    const existingEmail = await AdminModel.findOne({ email: email });
    if (existingEmail) {
      res.status(401).json({ message: "Email already exists!" });
      return;
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));

    // Hashed the password
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    await AdminModel.create({
      email: email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
    return;
  }
});

module.exports = router;
