import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./utils/db.js";
import driverRoutes from "./routes/driverRoutes.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/drivers", driverRoutes);

// Example test route
app.get("/", (req, res) => {
    res.send("F1 stats Backend is running");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});