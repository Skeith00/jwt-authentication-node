const express = require("express");
const router = express.Router();
const userservice = require("../service/userservice");

// Register
router.post("/register", (req, res) => {
  userservice.createUser;
  res.send('User created');
});


// Login
router.post("/login", (req, res) => {
  // our login logic goes here
});

module.exports = router;