import { Schema } from "mongoose";
import { IGuest } from "./Guest";

interface IBooking {
  _id?: Schema.Types.ObjectId;
  people: number;
  date: string;
  sitting: string;
  guest: IGuest;
}

export const bookingSchema = new Schema<IBooking>();
