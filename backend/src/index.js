const express = require("express");
require("./db/mongoose");
const router = require("./router/router");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(router);
app.use(cors());

app.listen(port, () => console.log(`Server is running on Port: ${port}`));

module.exports = app;
