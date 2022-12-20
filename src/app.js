//https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/
import express from "express";
import dotenv from "dotenv";
import usercontroller from "./controllers/userController.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use(function(error, req, res, next) {
    // Will **not** get called. You'll get Express' default error
    // handler, which returns `error.toString()` in the error body
    console.log('will not print');
    res.json({ message: error.message });
  });
  

app.use("/user", usercontroller);

export default app;