import { Schema, model } from "mongoose";
import { IGuest } from "./Guest";

export interface IBooking {
  // _id: Schema.Types.ObjectId;
  people: number;
  date: string;
  tables: number[];
  sitting: string;
  guest: IGuest;
}

export const bookingSchema = new Schema<IBooking>({
  people: { type: Number, required: true },
  date: { type: String },
  tables: { type: [Number], required: true },
  sitting: { type: String, required: true },
  guest: { type: {}, required: true },
});

export const Booking = model<IBooking>("Booking", bookingSchema);
