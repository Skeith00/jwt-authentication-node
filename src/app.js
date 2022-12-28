//https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/
import express from "express";
import dotenv from "dotenv";
import userController from "./controllers/userController.js";
import { errorLogger, errorResponder } from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/user", userController);
app.use(errorLogger)
app.use(errorResponder)

export default app;