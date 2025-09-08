import { Driver } from "../models/Driver.js";

// GET all drivers
export const getDrivers = async (req, res) => {
    try {
        const drivers = await Driver.find();
        res.json(drivers);
    } catch (error) {
         res.status(500).json({ message: error.message });
    }
};

// ADD a new driver
export const addDriver = async (req, res) => {
    try {
        const newDriver = new Driver(req.body);
        await newDriver.save();
        res.status(201).json(newDriver);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};