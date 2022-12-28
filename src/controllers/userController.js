import { Router } from "express";
const router = Router();
import { createUser } from "../services/userService.js";
import { User }  from "../models/user.js";

// Register
router.post("/register", async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  
    // Create user in our database
    let user = new User(
      email,
      password,
      firstName,
      lastName
    );

  try {
    let userId = await createUser(user);
    console.log(`User added with ID: ${userId}`);
    res.status(200).send('User created');
  } catch (e) {
    next(e)
  }

});

// Login
router.post("/login", (req, res) => {
  // our login logic goes here
});

export default router;