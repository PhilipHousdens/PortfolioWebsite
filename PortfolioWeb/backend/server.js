import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware 
app.use(cors());
app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
    res.send("Backend server is running");
});

// API route
app.get("/api/hello", (req, res) => {
    res.json({message: "Hello from express backend"});
});

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));