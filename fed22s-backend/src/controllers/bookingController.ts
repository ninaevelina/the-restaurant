import { RequestHandler } from "express";
import { Booking } from "../models/Booking";

export const createBooking: RequestHandler = (req, res, next) => {
  const booking = new Booking({});
  res.json("test msg");
};

export const deleteBooking: RequestHandler = async (req, res, next) => {
  const bookingID = req.params.id;

  const bookingToDelete = await Booking.findByIdAndRemove(bookingID);

  if (!bookingToDelete) {
    return res.sendStatus(404);
  }

  const response = await bookingToDelete.deleteOne();

  return res.send("deleted").status(204);
};

export const updateBooking: RequestHandler = (req, res, next) => {
  res.json("test msg");
};
