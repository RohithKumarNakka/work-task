const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const registerRouter = require("./routers/register");
const loginRouter = require("./routers/login");
require("./userSchema/User");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(registerRouter);
app.use(loginRouter);

mongoose.connect("mongodb://localhost:27017/user-data", {
  useNewUrlParser: true,
});

module.exports = app;
