//https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/
import express from "express";
const app = express();
import usercontroller from "./controllers/userController.js";

app.use(express.json());
app.use("/user", usercontroller);

export default app;