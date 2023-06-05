import { RequestHandler } from "express";
import { Booking, IBooking } from "../models/Booking";

export const getAllBookings: RequestHandler = async (req, res, next) => {
  try {
    const bookings: IBooking[] = await Booking.find();
    return res.status(200).json(bookings);
  } catch (error) {
    console.error("Couldn't retrieve booking", error);
    return res.status(500).json({ message: "internal server error" });
  }
  //   res.json("test get all admin");
};

export const deleteAdminBooking: RequestHandler = async (req, res, next) => {
  try {
    await Booking.deleteOne({ _id: req.params.id }); //kanske byta ut mot body eftersom användaren ska trycka på en knapp för att ta bort, och inte få id från params.
    return res.send("Booking deleted from database");
  } catch (error) {
    console.error("Couldn't delete booking", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateBooking: RequestHandler = (req, res, next) => {
  const bookingId = req.params.id; //ska det vara från params????
  const updateBooking = req.body;

  //res.json("test update");
};
