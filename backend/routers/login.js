const express = require("express");
const Registeration = require("../userSchema/User");
const router = new express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  await Registeration.findone({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.status(200).send({ message: "Login successfully", user: user });
      } else {
        res.status(400).send("Email or Password is wrong");
      }
    } else {
      res.status(404).send("You are not a registered user");
    }
  });
});

module.exports = router;
