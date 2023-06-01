import { RequestHandler } from "express";

export const createBooking: RequestHandler = (req, res, next) => {
  res.json("test msg");
};

export const deleteBooking: RequestHandler = (req, res, next) => {
  res.json("test msg");
};
