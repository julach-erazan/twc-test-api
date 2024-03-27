const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");
// const addStudentRoutes = require("./routes/addStudent");
// const viewStudentRoutes = require("./routes/viewStudent");
// const deleteStudentRoutes = require("./routes/deleteStudent");
// const updateStudentRoutes = require("./routes/updateStudent");

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
// app.use("/addstudent", addStudentRoutes);
// app.use("/viewstudent", viewStudentRoutes);
// app.use("/deletestudent", deleteStudentRoutes);
// app.use("/updatestudent", updateStudentRoutes);

app.listen(port, () => {
  console.log("Server Listnning...", { port });
});
