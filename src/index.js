import { createServer } from "http";
import app from "./app.js";

const server = createServer(app);
const port = process.env.API_PORT || 3000;

// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});