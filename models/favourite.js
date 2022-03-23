const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  status: String,
  species: String,
  type: String,
  location: String,
  image: String,
  characterID: Number,
  userSavedFavorite: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

const favourite = mongoose.model("favourite", userSchema);
module.exports = favourite;
