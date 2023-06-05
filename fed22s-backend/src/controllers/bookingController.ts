import { RequestHandler } from "express";
import { Booking } from "../models/Booking";


export const createBooking: RequestHandler = async (req, res, next) => {
  const { people, date, sitting, guest } = req.body;
  const newBooking = await Booking.create({
    people: people,
    date: date,
    sitting: sitting,
    guest: guest,
  });
  return res.status(201).json(newBooking);
};

export const deleteBooking: RequestHandler = async (req, res, next) => {
  const bookingId = req.params.id;

  await Booking.findByIdAndDelete(bookingId);
  console.log("function has been run");

  return res.send("deleted").status(204);
};

export const getAllBookings: RequestHandler = async (req, res, next) => {
  const bookings = await Booking.find();
  const totalBookings = await Booking.countDocuments();
  return res.json(bookings);
};

export const updateBooking: RequestHandler = async (req, res, next) => {
  const bookingId = req.params.id;

  const { people, date, sitting, guest } = req.body;
  const sort = { _id: bookingId };
  const update = { people: people, date: date, sitting: sitting, guest: guest };

  let booking = await Booking.findOneAndUpdate(sort, update, { new: true });

  return res.json(booking);

};
