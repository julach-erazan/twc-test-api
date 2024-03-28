const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");
const addContactRoutes = require("./routes/addContact");
const viewContactRoutes = require("./routes/viewContact");
const deleteContactRoutes = require("./routes/deleteContact");
const updateContactRoutes = require("./routes/updateContact");

//database connection
require("./db");

const port = process.env.PORT || 8001;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

//routes
app.use("/register", registerRoutes);
app.use("/login", loginRoutes);
app.use("/addcontact", addContactRoutes);
app.use("/viewcontact", viewContactRoutes);
app.use("/deletecontact", deleteContactRoutes);
app.use("/updatecontact", updateContactRoutes);

app.listen(port, () => {
  console.log("Server Listnning...", { port });
});
