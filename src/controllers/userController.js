import { Router } from "express";
const router = Router();
import { createUser } from "../services/userService.js";

// Register
router.post("/register", async (req, res, next) => {
  const { first_name, last_name, email, password } = req.body;
  try {
    userId = await createUser(first_name, last_name, email, password);
    console.log(`User added with ID: ${userId}`);
    res.status(200).send('User created');
  } catch (e) {
    console.error(e.stack);
    res.status(500).send('Internal Error.');
  }

});

// Login
router.post("/login", (req, res) => {
  // our login logic goes here
});

export default router;