import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5001/api",  // Backend base URL
});

export const getDrivers = () => API.get("/drivers");
export const createDriver = (driver) => API.post("/drivers", driver);