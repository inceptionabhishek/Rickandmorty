const router = require("express").Router();
const USER = require("../models/user");

// Authenticate a User
router.route("/login").post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  USER.findOne({ email: email, password: password })
    .then((user) => {
      if (user) {
        res.json({
          msg: "User Authenticated",
          user: user,
        });
      } else {
        res.status(400).json("Invalid Credentials");
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// Add a New User
router.route("/add").post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstname = req.body.name;
  const lastname = req.body.lastname;
  const Friends = req.body.Friends;
  const newUser = new USER({
    email,
    password,
    firstname,
    lastname,
    Friends,
  });
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
