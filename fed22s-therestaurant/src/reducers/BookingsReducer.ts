import { IBooking } from "../models/IBooking";
import { createNewBooking } from "../services/restaurantApi";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  GOTALLBOOKINGS,
  UPDATEBOOKING,
  DELETEBOOKING,
  CREATENEWBOOKING,
  //lägg till fler enums, deleted, updated(?) och kör en map på dessa
}

export const BookingsReducer = (bookings: IBooking[], action: IAction) => {
  switch (action.type) {
    case ActionType.GOTALLBOOKINGS: {
      console.log(action.payload);
      return JSON.parse(action.payload); // vi behöver returna vår payload (array av bookings som en string), gör om den till en array och sätta vårt state till den
    }
    case ActionType.UPDATEBOOKING: {
      const updatedBooking = bookings.map((booking) => {
        if (booking._id.toString() === action.payload) {
          return {
            ...booking,
            people: booking.people,
            date: booking.date,
            sitting: booking.sitting,
            guest: booking.guest,
            name: booking.guest.name,
            lastname: booking.guest.lastname,
            email: booking.guest.email,
            phone: booking.guest.phone.toString(),
          };
          // return {...booking, _id: !booking._id};?
        } else {
          return booking;
        }
      });
      return updatedBooking;
    }
    case ActionType.DELETEBOOKING: {
      return bookings.filter(
        (booking) => booking._id.toString() !== action.payload
      );
    }
    case ActionType.CREATENEWBOOKING: {
      const newBooking = createNewBooking();
      return [...bookings, newBooking];
    }
    // sista case med default för felhantering?
    default:
      break;
  }

  return bookings;
};
