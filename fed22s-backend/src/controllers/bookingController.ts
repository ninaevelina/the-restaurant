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
  return (
    res
      // .setHeader(
      //   "location",
      //   `http://localhost:${process.env.PORT}/api/v1/booking/${newBooking._id}`
      // )
      .status(201)
      .json(newBooking)
  );
};

export const deleteBooking: RequestHandler = async (req, res, next) => {
  const bookingId = req.params.id;

  await Booking.findByIdAndDelete(bookingId);
  console.log(bookingId);
  //const booking = await Booking.findById({ _id: bookingId });
  //await booking.
  //const bookingToDelete = await booking?.deleteOne(bookingId.)

  return res.send("deleted").status(204);
  //return res.status(204).json(booking);
  /*
  const bookingID = req.params.bookingID;

  const bookingToDelete = await Booking.findById(bookingID);

  if (!bookingID) return res.sendStatus(404);

  const response = await bookingToDelete?.deleteOne();

  return res.send("deleted").status(204);*/
  /*
  const bookingID = req.params.id;

  const bookingToDelete = await Booking.findById(bookingID);

  if (!bookingToDelete) {
    return res.sendStatus(404);
  }

  const response = await bookingToDelete.deleteOne();

  return res.send("deleted").status(204);*/
};

export const getAllBookings: RequestHandler = async (req, res, next) => {
  const bookings = await Booking.find();
  const totalBookings = await Booking.countDocuments();
  return res.json(bookings);
};
