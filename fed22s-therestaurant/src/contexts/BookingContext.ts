import { createContext } from "react";
import { IBooking } from "../models/IBooking";
import { IGuest } from "../models/IGuest";

export interface IBookingContext {
  booking: IBooking;
  addBooking: () => void;
  updatePeople: (numberOfGuest: number) => void;
  updateSeating: (seatingTime: string) => void;
  updateForm: (guestInfo: IGuest) => void;
  updateDate: (chosenDate: any) => void;
  updateTables: (tables: number) => void;
}

export interface IAllBookingsContext {
  bookings: IBooking[];
  getBookings: () => void;
}

export const CurrentBookingContext = createContext<IBookingContext>({
  booking: {
    _id: 0,
    people: 0,
    date: "",
    sitting: "",
    tables: 0,
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
  updateDate: (chosenData: any) => {
    return;
  },
  updateTables: (tables: number) => {
    return;
  },
});

export const BookingsContext = createContext<IAllBookingsContext>({
  bookings: [],
  getBookings: () => {},
});
