import mongoose from "mongoose";

const driverSchema = new mongoose.Schema(
    {
        driverId: { type: String, required: true, unique: true },   // e.g., "Hamilton"
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        nationality: { type: String },
        team: { type: String },
        dateOfBirth: { type: Date },
        championships: { type: Number, default: 0 },
    },
    { timestamps: true }
);

export const Driver = mongoose.model("Driver", driverSchema);