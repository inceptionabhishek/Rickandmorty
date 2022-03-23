const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  Friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});
const user = mongoose.model("user", userSchema);
module.exports = user;
