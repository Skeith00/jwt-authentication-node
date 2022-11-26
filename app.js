//https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/
const express = require("express");
const app = express();
const usercontroller = require("./controller/usercontroller.js");

app.use("/user", usercontroller);
//app.use(express.json());

module.exports = app;