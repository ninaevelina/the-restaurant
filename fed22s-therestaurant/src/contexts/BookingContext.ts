import { createContext } from "react";
import { IBooking } from "../models/IBooking";

export const BookingContext = createContext<IBooking[]>([]);
export const CurrentBookingContext = createContext<IBooking>({
  _id: 0,
  people: 0,
  date: "",
  sitting: "",
  tables: [],
  guest: {
    name: "",
    lastname: "",
    email: "",
    phone: 0,
  },
});
