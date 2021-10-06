const express = require("express");
const Registeration = require("./User");
const router = new express.Router();

//Registeration route
router.post("/Register", async (req, res) => {
  const register = new Registeration(req.body);
  const {email} =req.body;
  await register.findOne({email:email},(err,user)=>{
    if (user) {
      res.status(400).send("Failed to store in database, User already exist!");
    }
   else {
    const {name,userName,email,phone,password,role} =req.body;
     register.save((err)=>{
       if(err){
        res.status(400).send(err);
       }else{
        res.status(201).send( "Registered Sucessfully!");
       }
     })
   };
});


//login route
router.post("/Login", async (req, res) => {
  const { email, password } = req.body;
  await Registeration.findone({ email: email }, (err,user) => {
      if (user) {
        if (password === user.password) {
          res.status(200).send({ message: "Login successfully", user: user });
        } else {
          res.status(400).send( "Email or Password is wrong");
        }
      }else{
      res.status(404).send("You are not a registered user");
      }
  });
});

module.exports = router;