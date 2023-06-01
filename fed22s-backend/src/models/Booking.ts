import mongoose, { Schema, model } from "mongoose";
import { IGuest } from "./Guest";

interface IBooking {
  _id: Schema.Types.ObjectId;
  people: number;
  date: string;
  tables: number[];
  sitting: string;
  guest: IGuest;
}

export const bookingSchema = new mongoose.Schema<IBooking>();

export const Booking = model<IBooking>("Booking", bookingSchema);
