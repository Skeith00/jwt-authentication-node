import { Router } from "express";
const router = Router();
import { createUser } from "../services/userService.js";

// Register
router.post("/register", (req, res) => {
  createUser(req, res);
  res.send('User created');
});


// Login
router.post("/login", (req, res) => {
  // our login logic goes here
});

export default router;