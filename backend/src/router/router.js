const express = require("express");
const Registeration = require("../userSchema/user");
const router = new express.Router();

router.post("/register", async (req, res) => {
  const register = new Registeration(req.body);
  try {
    await register.save();
    res.status(201).send("Registered Sucessfully!");
  } catch (e) {
    res.status(404).send(e);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await Registeration.findByCredentials(
      req.body.email,
      req.body.password
    );
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
