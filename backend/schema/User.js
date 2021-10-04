const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//SECTION  collection and schema for Registration
let UserSchema = new Schema(
  {
    name: {
      type: String,
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
      required: [true, "can't be blank"],
    },
    user_name: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
      index: true,
    },
    phone: {
      type: Number,
      unique: true,
      required: [true, "can't be blank"],
      match: [/^[0-9]+$/, "is invalid"],
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z]+$/, "is invalid"],
      index: true,
    },
  },
  {
    collection: "User",
  }
);

module.exports = mongoose.model("User", UserSchema);
