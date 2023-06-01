require("dotenv").config();

import { Booking } from "../models/Booking";

import { mockBookingsData } from "./bookings";

import mongoose from "mongoose";

const populateDbWithMockData = async (connectionString: string) => {
  try {
    mongoose.set("strictQuery", false);

    const conn = await mongoose.connect(connectionString);

    console.log(`MongoDB connected: ${conn.connection.host}`);

    await Booking.deleteMany();

    const productRes = await Booking.create(mockBookingsData);

    console.log("Database successfully populated with test data");
  } catch (error) {
    console.error(error);
  } finally {
    process.exit(0);
  }
};

populateDbWithMockData(process.env.MONGO_CONNECTION_STRING || "");
