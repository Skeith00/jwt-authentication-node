import { Router } from "express";
const router = Router();

import * as userService from "../services/userService.js";
import { User }  from "../models/user.js";

// Register
router.post("/register", async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Validate user input
    if (!(email && password && firstName && lastName)) {
      res.status(400).send("Some required fields are empty");
    }

    // Create user object
    let user = new User(
      email.toLowerCase(),
      password,
      firstName,
      lastName
    );

    await userService.registerUser(user);
    res.status(200).send('User created');
  } catch (e) {
    next(e)
  }

});

// Login
router.post("/login", async (req, res, next) => {
    
    try {      
      const { email, password } = req.body;
  
      // Validate user input
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }

      // Validate if user exist in our database
      const jwt = await userService.validateUser(email, password);
  
      if (jwt) {  
        // user
        res.status(200).json(jwt);
      }
      res.status(400).send("Invalid Credentials.");
    } catch (e) {
      next(e)
    }
});

export default router;