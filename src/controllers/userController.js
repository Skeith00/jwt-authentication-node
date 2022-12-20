import { Router } from "express";
const router = Router();
import { createUser } from "../services/userService.js";

// Register
router.post("/register", (req, res, next) => {
  const { first_name, last_name, email, password } = req.body;
  createUser(first_name, last_name, email, password);
  res.status(201).send('User created');
});

// Login
router.post("/login", (req, res) => {
  // our login logic goes here
});

export default router;