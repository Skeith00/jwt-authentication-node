//https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/
import express from "express";
import dotenv from "dotenv";
import authController from "./controllers/authController.js";

import { unless } from './utils/middlewareExclusion.js';

import { verifyToken } from "./middlewares/auth.js";
import { errorLogger, errorResponder } from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();

app.use(express.json());

// JWT verification middleware with route exclusions
app.use(unless(['/auth/login', '/auth/register'], verifyToken));

// Controllers
app.use("/auth", authController);

// Error handlers
app.use(errorLogger)
app.use(errorResponder)

export default app;