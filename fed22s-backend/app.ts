import dotenv from "dotenv";
dotenv.config();
import express from "express";
// import "express-async-errors";
import mongoose from "mongoose";
import bookingRoutes from "./src/routes/bookingRoutes";
// import adminRoutes from "./src/routes/adminRoutes";
import path from "path";
import { json } from "express";
import { env } from "process";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`processing ${req.method} request to ${req.path}`);
  console.log(req.path);
  next();
});

app.use("/api/v1/booking", bookingRoutes);
// app.use("/api/v1/admin", adminRoutes);

app.use((req, res) => {
  const isApiPath = req.path.startsWith("/api/");

  if (isApiPath) return res.sendStatus(404);

  return;
});

const port = process.env.PORT || 5000;
async function run() {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGODB_URI || "");

    app.listen(port, () => {
      console.log(`server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
run();
