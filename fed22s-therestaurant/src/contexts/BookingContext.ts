import { createContext } from "react";
import { IBooking } from "../models/IBooking";

export interface IBookingContext {
  booking: IBooking;
  addBooking: (newBooking: IBooking) => void;
}

export const CurrentBookingContext = createContext<IBookingContext>({
  booking: {
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
  },

  addBooking: (newBooking: IBooking) => {
    return;
  },
});
