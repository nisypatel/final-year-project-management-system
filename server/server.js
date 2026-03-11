import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import app from "./app.js";  

// Load env variables
dotenv.config();

// Create express app
// const app = express();

// Connect Database
connectDB();

// Port
const PORT = process.env.PORT || 5000;

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// ERROR HANDLING

process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  server.close(() => process.exit(1));
});

process.on("uncaughtException", (err) => {
  console.error(`Uncaught Exception: ${err.message}`);
  process.exit(1);
});

export default server;
