import { createContext } from "react";
import { IBooking } from "../models/IBooking";
import { IGuest } from "../models/IGuest";

export interface IBookingContext {
  booking: IBooking;
  addBooking: () => void;
  updatePeople: (numberOfGuest: number) => void;
  updateSeating: (seatingTime: string) => void;
  updateForm: (guestInfo: IGuest) => void;
}
export interface IBookingsContext {
  bookings: IBooking[];
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

  addBooking: () => {
    return;
  },
  updatePeople: (numberOfGuest: number) => {
    return;
  },
  updateSeating: (seatingTime: string) => {
    return;
  },
  updateForm: (guestInfo: IGuest) => {
    return;
  },
});

export const BookingsContext = createContext<IBookingsContext[]>([]);
