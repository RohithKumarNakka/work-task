const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./route");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

mongoose.connect("mongodb://localhost:27017/userData", {
  useNewUrlParser: true,
});

app.use("./User", router);

module.exports = app;
