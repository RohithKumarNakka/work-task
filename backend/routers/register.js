const express = require("express");
const Registeration = require("../userSchema/User");
const router = new express.Router();

router.post("/register", async (req, res) => {
  const { name, userName, email, phone, password, role } = req.body;
  await Registeration.findOne(
    {
      name: name,
      userName: userName,
      email: email,
      phone: phone,
      password: password,
      role: role,
    },
    (err, user) => {
      if (user) {
        res
          .status(400)
          .send("Failed to store in database, User already exist!");
      } else {
        const register = new Registeration({
          name,
          userName,
          email,
          phone,
          password,
          role,
        });
        register.save((err) => {
          if (err) {
            res.status(400).send(err);
          } else {
            res.status(201).send("Registered Sucessfully!");
          }
        });
      }
    }
  );
});

module.exports = router;
