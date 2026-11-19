import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "UptimeIQ API is running"
  });
});

export default app;
