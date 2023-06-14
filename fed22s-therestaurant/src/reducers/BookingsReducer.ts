import { IBooking } from "../models/IBooking";
import { createNewBooking } from "../services/restaurantApi";

export interface IAction {
  type: ActionType;
  payload: any;
}

export enum ActionType {
  GOTALLBOOKINGS,
  DELETEBOOKING,
  CREATENEWBOOKING,
}

export const BookingsReducer = (bookings: IBooking[], action: IAction) => {
  switch (action.type) {
    case ActionType.GOTALLBOOKINGS: {
      return JSON.parse(action.payload);
    }

    case ActionType.DELETEBOOKING: {
      return bookings.filter(
        (booking) => booking._id.toString() !== action.payload
      );
    }
    case ActionType.CREATENEWBOOKING: {
      const newBooking: IBooking = {
        _id: action.payload._id,
        people: action.payload.people,
        date: action.payload.date,
        sitting: action.payload.sitting,
        tables: action.payload.tables,
        guest: {
          name: action.payload.name,
          lastname: action.payload.lastname,
          email: action.payload.email,
          phone: action.payload.phone,
        },
      };

      return [...bookings, newBooking];
    }

    default:
      break;
  }

  return bookings;
};
