import { RequestHandler } from "express";

export const createBooking: RequestHandler = (req, res, next) => {
  res.json("test");
};

export const deleteBooking: RequestHandler = (req, res, next) => {
  res.json("test");
};
