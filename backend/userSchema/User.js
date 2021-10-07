const mongoose = require("mongoose");
const validator = require("mongoose-validator");
const Schema = mongoose.Schema;

//SECTION  collection and schema for Registration
const userSchema = new Schema(
  {
    name: {
      type: String,
      match: [/^[a-zA-Z]+$/, "is invalid"],
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      validate: [
        validator({
          validator: "isEmail",
          message: "Please enter valid email!",
        }),
      ],
      required: true,
    },
    phone: {
      type: Number,
      unique: true,
      required: true,
      length: 10,
    },
    password: {
      type: String,
      minlength: 8,
      maxlength: 16,
      trim: true,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  {
    collection: "User",
  }
);

module.exports = mongoose.model("User", userSchema);
