const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB)
  .then(() => console.log("Database Connected Successfully..."))
  .catch((err) => console.log(err.message));